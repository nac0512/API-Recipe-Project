import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Drink from '../components/Drink';
import Food from '../components/Food';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search'
import { BiError } from 'react-icons/bi'
import { ImSad } from 'react-icons/im'
import DrinkSearchResults from '../components/DrinkSearchResults';
import FoodSearchResults from '../components/FoodSearchResults';

function Home() {

    // State variables for displaying correct API information when available
    const [url, seturl] = useState('');
    const [searchTerm, setsearchTerm] = useState('');
    const [api, setapi] = useState('');
    const [info, setinfo]= useState('');
    const [infoReady, setinfoReady] = useState(false);
    const [infoIsFood, setinfoIsFood] = useState(false);
    const [infoIsNull, setinfoIsNull] = useState(false);
    const [id, setid] = useState('');
    const [choiceClicked, setchoiceClicked] = useState(false);
    const [choiceInfo, setchoiceInfo] = useState('');
    const [warning, setWarning] = useState('');

    // Function to handle form information when submitted to make sure nothing is left blank and update appropriate states
    const findRecipe = (e) => {
        e.preventDefault();
        if(e.target.recipeType.value.trim() !== '' && e.target.searchTerm.value.trim() !== '') {
            if(e.target.recipeType.value.includes("meal")) {
                setapi("meal");
            }
            else {
                setapi("drink");
            }
            seturl(e.target.recipeType.value);
            setsearchTerm(e.target.searchTerm.value);
            e.target.reset();
        }
        else {
            setWarning([<BiError style={styles.icon}/>, " Please don't leave any fields blank"]);
        }
    };

    // Function to return to search form when new search button is pressed
    const newSearch = () => {
        setinfo('');
        setinfoReady(false);
        setWarning('');
        setinfoIsNull(false);
    };

    const backToSearch = () => {
        setchoiceClicked(false);
        setchoiceInfo('');
    }

    const choiceSelected = (e) => {
        e.preventDefault();
        setid(e.target.id);
    }

    // When all appropriates states have been updated, api info will be fetched and viewport will display all gathered info
    useEffect(() => {
        async function fetchAPI() {
            if(url !== '') {
                const response = await fetch(`${url}api/json/v1/1/search.php?s=${searchTerm}`);
                const data = await (response.json());
                if(api === "meal") {
                    setinfo(data.meals);
                    setinfoIsFood(true);
                }
                else {
                    setinfo(data.drinks);
                    setinfoIsFood(false);
                }
                setinfoReady(true);
            }

            if(id !== '') {
                if(api === "meal") {
                    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                    const data = await (response.json());
                    setchoiceInfo(data.meals);
                }
                else {
                    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                    const data = await (response.json());
                    setchoiceInfo(data.drinks);
                }
                setchoiceClicked(true);
            }
        }; 
        fetchAPI();
        seturl('');
        setid('');
        if(info == null) {
            setinfoIsNull(true);
        }
    }, [url, searchTerm, api, info, id]);

    // Structure to display info on viewport
    return(
        <div style={styles.display}>
            <Header />
            <main style={styles.main}>
                {/* If API data has been fetched, results page will display a header, and a new search button. If the information gathered from the API is null, apology will display. If the API info is not null and it is a food recipe, the FoodSearchResults component will map through it and display all thumbnails and titles. If the user clicks on a thumbnail, all info for that recipe will display. If it is a drink recipe, the DrinkSearchResults component will map through it and display all thumbnails and titles. If the user clicks on a thumbnail, all info for that recipe will display. If the API data has not been fetched, the search form will display on the screen.  */}
                {infoReady ?
                    infoIsNull ? <>
                        <h2 style={styles.h2}>all recipes found for: {searchTerm}</h2>
                        <Button content="New Search" clickEvent={newSearch} style={styles.button}/>
                        <p><ImSad style={styles.icon}/> We're sorry. We couldn't find any recipes matching {searchTerm}. Please try again.</p> 
                    </>
                    :
                    infoIsFood ? 
                        choiceClicked ? <>
                            {choiceInfo.map((recipe, index) => (
                                <Food data={recipe} key={index} />
                            ))} 
                            <Button content="New Search" clickEvent={newSearch} style={styles.button}/> 
                            <Button content="Back To Search Results" clickEvent={backToSearch} style={styles.button}/>
                        </>
                        :   <>
                        <h2 style={styles.h2}>all recipes found for: {searchTerm}</h2>
                        <Button content="New Search" clickEvent={newSearch} style={styles.button}/> 
                        {info.map((recipe, index) => (
                            <FoodSearchResults data={recipe} key={index} choiceSelected={choiceSelected} />
                        ))}
                        <Button content="New Search" clickEvent={newSearch} style={styles.button}/>  
                        </>
                    :
                        choiceClicked ? <>
                            {choiceInfo.map((recipe, index) => (
                                <Drink data={recipe} key={index} />
                            ))} 
                            <Button content="New Search" clickEvent={newSearch} style={styles.button}/> 
                            <Button content="Back To Search Results" clickEvent={backToSearch} style={styles.button}/>
                        </>
                        : <>
                            <h2 style={styles.h2}>all recipes found for: {searchTerm}</h2>
                            <Button content="New Search" clickEvent={newSearch} style={styles.button}/> 
                            {info.map((recipe, index) => (
                                <DrinkSearchResults data={recipe} key={index} choiceSelected={choiceSelected} />
                            ))}
                            <Button content="New Search" clickEvent={newSearch} style={styles.button}/>  
                        </>
                :   <>
                        <h2 style={styles.h2}>search free recipes</h2>
                        <p style={styles.instructions}>Welcome to Anyone Can Cook, the online database for finding delicious recipes for any occasion! Looking for something specific? Enter a search word below and find exactly what you're looking for. Feeling a little adventourous? Try the random meal or drink recipe generators and try something new.</p>
                        <Search findRecipe={findRecipe}/>
                        <p style={styles.warning}>{warning}</p> 
                    </>
                }
            </main>
            <Footer />
        </div>
    );
}

export default Home;

const styles = {
    display: {
        minHeight: '100vh',
        display:'flex',
        flexDirection:'column'
    },
    main: {
        flexGrow:'1',
        textAlign:'center',
        color:'rgb(21, 21, 21)'
    },
    h2: {
        borderBottom:'dashed 2px rgba(81, 152, 114, .5)',
        width:'max-content',
        margin:'2rem auto',
        textTransform:'capitalize'
    },
    instructions: {
        width:'65rem',
        margin:'0 auto 3rem auto'
    },
    warning:{
        color:'rgb(186, 63, 29)'
    },
    icon: {
        fontSize:'1.8rem',
        verticalAlign:'text-top'
    },
    button: {
        margin:'0 0 1.5rem 1rem',
        width:'max-content',
        height:'2.5rem',
        borderRadius:'3rem',
        borderColor:'rgb(161, 103, 74)',
        color:'rgb(161, 103, 74)',
        backgroundColor:'rgb(253, 255, 252)',
        fontSize:'.9rem'
    }
}