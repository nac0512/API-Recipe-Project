// Drink component that displays all info for selected item

import React from 'react';
import Thumbnail from './Thumbnail';
import { GiFireBowl } from 'react-icons/gi';
import { BsListTask } from 'react-icons/bs';

const Drink = ({data}) => {
    const listItems = [];

    for(let i = 1; i <= 15; i++) {
        if (data['strMeasure' + i] !== null && data['strMeasure' + i] !== ''  && data['strIngredient' + i] !== null && data['strIngredient' + i] !== '') {
            listItems.push(`${data['strMeasure' + i]} ${data['strIngredient' + i]}`);
        }
    }

    return (
        <article key={data.idDrink} style={styles.article}>
            <Thumbnail imgSrc={data.strDrinkThumb} imgAlt={`Finished result of ${data.strDrink}`} style={styles.img} id={data.idDrink}/>
            <h3 style={styles.h3}>{data.strDrink}</h3>
            <p style={styles.category}><span style={styles.span}>Category:</span> {data.strCategory} | <span style={styles.span}>Alcoholic:</span> {data.strAlcoholic} | <span style={styles.span}>Glass:</span> {data.strGlass}</p>
            <h4 style={styles.ingh4}><GiFireBowl style={styles.icon}/>Ingredients</h4>
            <ul style={styles.ul}>
            {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h4 style={styles.insth4}><BsListTask style={styles.icon}/>Instructions</h4>
            <p style={styles.instructions}>{data.strInstructions}</p>
        </article>
    );
}

export default Drink;

const styles = {
    article:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        gridTemplateRows:'max-content',
        gridTemplateAreas: 
        `"h3 ingredientsh4"
        "img ingredients"
        "category ingredients"
        "instructionsh4 instructionsh4"
        "instructions instructions"`,
        width:'65rem',
        margin:'0 auto 1.5rem auto',
        color:'rgb(21, 21, 21)',
        backgroundColor:'rgb(255, 253, 252)',
        borderBottom:'dashed 2px rgba(81,152,114,.5)'
    },
    img: {
        width:'25rem',
        height:'20rem',
        margin:'0 auto',
        border:'double 7px rgb(253, 184, 51)',
        borderRadius:'.8rem',
        gridArea:'img'
    },
    h3: {
        gridArea:'h3'
    },
    category: {
        gridArea:'category'
    },
    span: {
        color:'rgba(81,152,114,.5)'
    },
    ingh4: {
        gridArea:'ingredientsh4'
    },
    ul: {
        margin:'0 0 0 9rem',
        display:'inline-block',
        textAlign:'left',
        gridArea:'ingredients'
    }, 
    icon: {
        fontSize:'2rem',
        verticalAlign:'text-top',
        marginRight:'.5rem',
        color:'rgba(81,152,114,.5)'
    },
    insth4: {
        gridArea:'instructionsh4'
    },
    instructions: {
        gridArea:'instructions'
    }
}