// Component that displays image and title of all items fetched in drink api via search

import React from 'react';
import Thumbnail from './Thumbnail';

const DrinkSearchResults = ({data, choiceSelected}) => {
    return(
        <article key={data.idDrink} style={styles.display}>
            <a href={data.strImageSource} onClick={choiceSelected}><Thumbnail imgSrc={data.strDrinkThumb} imgAlt={`Finished result of ${data.strDrink}`} style={styles.img} id={data.idDrink}/></a>
            <h3 style={styles.h3}>{data.strDrink}</h3>
            <p><span style={styles.span}>Category:</span> {data.strCategory} | <span style={styles.span}>Alcoholic:</span> {data.strAlcoholic} | <span style={styles.span}>Glass:</span> {data.strGlass}</p>
        </article>

    );
}

export default DrinkSearchResults;

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