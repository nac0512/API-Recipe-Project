import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Drink from '../components/Drink';
import Food from '../components/Food';
import Search from '../components/Search'

function Home() {
    const [url, seturl] = useState('');
    const [searchTerm, setsearchTerm] = useState('');
    const [api, setapi] = useState('');
    const [info, setinfo]= useState('');
    const [infoReady, setinfoReady] = useState(false);
    const [infoIsFood, setinfoIsFood] = useState(false);
    const [infoisNull, setinfoIsNull] = useState(false);
    const [warning, setWarning] = useState('');

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

    const newSearch = () => {
        setinfoReady(false);
        setWarning('');
        setinfoIsNull(false);
    };

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
                if(info === '') {
                    setinfoIsNull(true);
                }
                setinfoReady(true);
            }
        }; 
        fetchAPI();
        seturl('');
    }, [url, searchTerm, api, info, infoReady, infoIsFood, infoisNull]);

    return(
        <div>
            <main>
                {infoReady ? <>
                    <h2>{api} recipes found for: {searchTerm}</h2>
                    <Button content="New Search" clickEvent={newSearch}/>
                    {infoisNull ? 
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