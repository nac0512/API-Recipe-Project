import React, { useEffect, useState } from 'react';
import Drink from '../components/Drink';
import Food from '../components/Food';
import Search from '../components/Search'

function Home() {
    const [url, seturl] = useState('');
    const [searchTerm, setsearchTerm] = useState('');
    const [api, setapi] = useState('');
    const [info, setinfo]= useState('');
    const [infoReady, setinfoReady] = useState(false);
    const[infoisFood, setinfoisFood] = useState(false);

    const findRecipe = (e) => {
        e.preventDefault();
        if(e.target.recipeType.value.includes("meal")) {
            setapi("food");
        }
        else {
            setapi("drink");
        }
        seturl(e.target.recipeType.value);
        setsearchTerm(e.target.searchTerm.value);
        e.target.reset();
    };

    useEffect(() => {
        async function fetchAPI() {
            if(url !== '') {
                const response = await fetch(`${url}api/json/v1/1/search.php?s=${searchTerm}`);
                const data = await (response.json());
                if(api === "food") {
                    setinfo(data.meals);
                    setinfoisFood(true);
                }
                else {
                    setinfo(data.drinks);
                    setinfoisFood(false);
                }
                setinfoReady(true);
            }
        }; 
        fetchAPI();
    }, [url, searchTerm, api, info, infoReady, infoisFood])

    return(
        <div>
            <main>
                {infoReady ? [
                    <h2>Recipes found for: {searchTerm}</h2>,
                    infoisFood ? 
                    info.map((recipe, index) => (
                        <Food data={recipe} key={index} />
                    ))
                    :
                    info.map((recipe, index) => (
                        <Drink data={recipe} key={index} />
                    )) ]
                : [
                    <h2>Search Free Recipes</h2>,
                    <Search findRecipe={findRecipe} /> 
                  ]}
            </main>
        </div>
    );
}

export default Home;