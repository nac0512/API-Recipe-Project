import React from 'react';
import Button from './Button';

const Search = (props) => {
    return (
        <form onSubmit={props.findRecipe}>
            <div>
                <label htmlFor="recipeType">Select the kind of recipe you want:</label>
                <input type="radio" id="Food" name="recipeType" value="https://www.themealdb.com/"></input>
                <label htmlFor="food">Food</label>
                <input type="radio" id="Drinks" name="recipeType" value="https://www.thecocktaildb.com/"></input>
                <label htmlFor="Drinks">Drinks</label>
            </div>
            <div>
                <label htmlFor="searchTerm">Please enter a search word</label>
                <input type="text" name="searchTerm" id="searchTerm" placeholder="Search"></input>
            </div>
            <Button content="Search" />
        </form>
    );
}

export default Search;