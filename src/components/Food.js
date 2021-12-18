// Food component that displays all info for selected item

import React from 'react';
import Thumbnail from './Thumbnail';
import { BsYoutube } from 'react-icons/bs';
import { GiFireBowl } from 'react-icons/gi';
import { BsListTask } from 'react-icons/bs';
import { BsChevronDoubleRight } from 'react-icons/bs';

const Food = ({data}) => {
    const listItems = [];

    for(let i = 1; i <= 20; i++) {
        if (data['strMeasure' + i] !== null && data['strMeasure' + i] !== ''  && data['strIngredient' + i] !== null && data['strIngredient' + i] !== '') {
            listItems.push(`${data['strMeasure' + i]} ${data['strIngredient' + i]}`);
        }
    }

    return (
        <article key={data.id} style={styles.article}>
            <Thumbnail imgSrc={data.strMealThumb} imgAlt={`Finished result of ${data.strMeal}`} style={styles.img}/>
            <h3 style={styles.h3}>{data.strMeal}</h3>
            <p style={styles.category}><span style={styles.span}>Cuisine:</span> {data.strArea} | <span style={styles.span}>Category:</span> {data.strCategory} | <span style={styles.span}>Tags:</span> {data.strTags}</p>
            <h4 style={styles.ingh4}><GiFireBowl style={styles.icon}/>Ingredients</h4>
            <ul style={styles.ul}>
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h4 style={styles.insth4}><BsListTask style={styles.icon}/>Instructions</h4>
            <p style={styles.instructions}>{data.strInstructions.replaceAll('\r\n', '\r\n\r\n')}</p>
            <h4 style={styles.vidh4}><BsYoutube style={styles.icon}/>Video</h4>
            <p style={styles.vid}><a href={data.strYoutube} target="_blank" rel="noreferrer" style=
            {styles.a}>Join us in the kitchen! <BsChevronDoubleRight style={styles.linkIcon}/></a></p>
        </article>
    );
}

export default Food;

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
        "instructions instructions"
        "videoh4 videoh4"
        "vidLink vidLink"`,
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
        gridArea:'instructions',
        whiteSpace:'pre-line'
    },
    vidh4: {
        gridArea:'videoh4',
        marginBottom:'0'
    },
    vid: {
        gridArea:'vidLink'
    },
    a: {
        color:'rgb(161, 103, 74)',
        textDecoration:'none',
        fontSize:'1.2rem'
    },
    linkIcon: {
        marginLeft:'.1rem',
        verticalAlign:'text-top',
        fontSize:'1.5rem'
    }
}