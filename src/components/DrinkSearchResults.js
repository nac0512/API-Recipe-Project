// Component that displays image and title of all items fetched in drink api via search

import React from 'react';
import Thumbnail from './Thumbnail';

const DrinkSearchResults = ({data, choiceSelected}) => {
    return(
        <article key={data.idDrink} style={styles.display}>
            <a href={data.strImageSource} onClick={choiceSelected}><Thumbnail imgSrc={data.strDrinkThumb} imgAlt={`Finished result of ${data.strDrink}`} style={styles.img} id={data.idDrink}/></a>
            <h3 style={styles.h3}>{data.strDrink}</h3>
            <p style={styles.category}><span style={styles.span}>Category:</span> {data.strCategory} | <span style={styles.span}>Alcoholic:</span> {data.strAlcoholic} | <span style={styles.span}>Glass:</span> {data.strGlass}</p>
        </article>

    );
}

export default DrinkSearchResults;

const styles = {
    display: {
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
    }
}