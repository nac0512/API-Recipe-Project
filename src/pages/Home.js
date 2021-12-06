import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Drink from '../components/Drink';
import Food from '../components/Food';
import Search from '../components/Search'

function Home() {

    // State variables for displaying correct API information when available
    const [url, seturl] = useState('');
    const [searchTerm, setsearchTerm] = useState('');
    const [api, setapi] = useState('');
    const [info, setinfo]= useState('');
    const [infoReady, setinfoReady] = useState(false);
    const [infoIsFood, setinfoIsFood] = useState(false);
    const [infoIsNull, setinfoIsNull] = useState(false);
    const [warning, setWarning] = useState('');

    // Function to handle form information when submitted to make sure nothing is left blank and update appropriate states
    const findRecipe = (e) => {
        e.preventDefault();
        if(e.target.recipeType.value.trim() !== '' && e.target.searchTerm.value.trim() !== '') {
            if(e.target.recipeType.value.includes("meal")) {
                setapi("food");
            }
            else {
                setapi("drink");
            }
            seturl(e.target.recipeType.value);
            setsearchTerm(e.target.searchTerm.value);
            e.target.reset();
        }
        else {
            setWarning("Please don't leave any fields blank");
        }
    };

    // Function to return to search form when new search button is pressed
    const newSearch = () => {
        setinfo('');
        setinfoReady(false);
        setWarning('');
        setinfoIsNull(false);
    };

    // When all appropriates states have been updated, api info will be fetched and viewport will display all gathered info
    useEffect(() => {
        async function fetchAPI() {
            if(url !== '') {
                const response = await fetch(`${url}api/json/v1/1/search.php?s=${searchTerm}`);
                const data = await (response.json());
                if(api === "food") {
                    setinfo(data.meals);
                    setinfoIsFood(true);
                }
                else {
                    setinfo(data.drinks);
                    setinfoIsFood(false);
                }
                setinfoReady(true);
            }
        }; 
        fetchAPI();
        if(info == null) {
            setinfoIsNull(true);
        }
        seturl('');
    }, [url, searchTerm, api, info]);

    // Structure to display info on viewport
    return(
        <div>
            <main>
                {/* If API data has been fetched, results page will display a header, and a new search button. If the information gathered from the API is null, apology will display. If the API info is not null and it is a food recipe, the Food component will map through it. If it is a drink recipe, the Drink component will map through it. If the API data has not been fetched, the search form will display on the screen.  */}
                {infoReady ? <>
                    <h2>{api} recipes found for: {searchTerm}</h2>
                    <Button content="New Search" clickEvent={newSearch}/>
                    {infoIsNull ? 
                        <p>We're sorry. We couldn't find any recipes matching {searchTerm}. Please try again.</p>
                    :
                    infoIsFood ? 
                        info.map((recipe, index) => (
                            <Food data={recipe} key={index} />
                        ))
                        :
                        info.map((recipe, index) => (
                            <Drink data={recipe} key={index} />
                        ))}
                    <Button content="New Search" clickEvent={newSearch}/> 
                </>
                :   <>
                        <h2>Search Free Recipes</h2>
                        <Search findRecipe={findRecipe} />
                        <p>{warning}</p> 
                    </>
                }
            </main>
        </div>
    );
}

export default Home;