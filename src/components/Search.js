// Search form to get info needed to fetch API data

import React from 'react';
import Button from './Button';
import { GiMeal } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';

const Search = (props) => {
    return (
        <form onSubmit={props.findRecipe} style={styles.form}>
            <div style={styles.div}>
                <label htmlFor="recipeType" style={styles.label}>Select the recipe category:</label>
                <input type="radio" id="meal" name="recipeType" value="https://www.themealdb.com/"></input>
                <label htmlFor="meal" style={styles.option}><GiMeal style={styles.icon}/> Meal</label>
                <input type="radio" id="drink" name="recipeType" value="https://www.thecocktaildb.com/"></input>
                <label htmlFor="drink"><BiDrink style={styles.icon}/> Drink</label>
            </div>
            <div style={styles.div}>
                <label htmlFor="searchTerm" style={styles.label}>What are you looking for? </label>
                <input type="text" name="searchTerm" id="searchTerm" placeholder="Search Recipes... " style={styles.input}></input>
            </div>
            <Button content="Find Recipes" style={styles.button}/>
        </form>
    );
}

export default Search;

const styles = {
    form: {
        width:'40rem',
        margin:'0 auto',
        textAlign:'left'
    },
    div: {
        marginBottom:'1.5rem'
    },
    icon: {
        color:'rgba(81, 152, 114, .5)',
        fontSize:'1.8rem',
        verticalAlign:'text-top'
    },
    label: {
        marginRight:'1.2rem',
    },
    option: {
        marginRight:'1rem'
    },
    input: {
        width:'15rem',
        height:'2rem',
        borderColor:'rgba(81, 152, 114, .5)',
        borderRadius:'.5rem',
        backgroundColor:'rgb(235, 235, 235)',
        textIndent:'1rem',
        fontSize:'1.2rem'
    },
    button: {
        marginLeft:'36%',
        marginTop:'1rem',
        width:'8rem',
        height:'2.5rem',
        borderRadius:'3rem',
        borderColor:'rgb(161, 103, 74)',
        color:'rgb(161, 103, 74)',
        backgroundColor:'rgb(253, 255, 252)',
        fontSize:'.9rem'
    }
}