// Component that displays image and title of all items fetched in drink api via search

import React from 'react';
import Thumbnail from './Thumbnail';

const FoodSearchResults = ({data, choiceSelected}) => {
    return(
        <article key={data.idMeal} style={styles.display}>
            <a href={data.strImageSource} onClick={choiceSelected}><Thumbnail imgSrc={data.strMealThumb} imgAlt={`Finished result of ${data.strMeal}`} style={styles.img} id={data.idMeal}/></a>
            <h3 style={styles.h3}>{data.strMeal}</h3>
            <p><span style={styles.span}>Cuisine:</span> {data.strArea} | <span style={styles.span}>Category:</span> {data.strCategory} | <span style={styles.span}>Tags:</span> {data.strTags}</p>
        </article>

    );
}

export default FoodSearchResults;

const styles = {
    display: {
        width:'65rem',
        margin:'0 auto 1.5rem auto',
        paddingBottom:'1.5rem',
        color:'rgb(21, 21, 21)',
        backgroundColor:'rgb(255, 253, 252)',
        borderBottom:'dashed 2px rgba(81,152,114,.5)',
        overflow:'auto'
    },
    img: {
        float:'left',
        width:'15rem',
        border:'double 7px rgb(253, 184, 51)',
        borderRadius:'.8rem',
        cursor:'pointer',
        textWrap:'wrap'
    },
    h3: {
        marginTop:'5rem'
    },
    span: {
        color:'rgba(81,152,114,.5)'
    }
}