// Food component that displays API info once mapped

import React from 'react';
import Thumbnail from './Thumbnail';
import { BsYoutube } from 'react-icons/bs';
import { GiFireBowl } from 'react-icons/gi';
import { BsListTask } from 'react-icons/bs';
import { BsChevronDoubleRight } from 'react-icons/bs';

const Food = ({data}) => {
    return (
        <article key={data.id} style={styles.article}>
            <Thumbnail imgSrc={data.strMealThumb} imgAlt={`Finished result of ${data.strMeal}`} style={styles.img}/>
            <h3 style={styles.h3}>{data.strMeal}</h3>
            <p style={styles.category}><span style={styles.span}>Cuisine:</span> {data.strArea} | <span style={styles.span}>Category:</span> {data.strCategory} | <span style={styles.span}>Tags:</span> {data.strTags}</p>
            <h4 style={styles.ingh4}><GiFireBowl style={styles.icon}/>Ingredients</h4>
            <ul style={styles.ul}>
                <li>{data.strMeasure1} {data.strIngredient1}</li>
                <li>{data.strMeasure2} {data.strIngredient2}</li>
                <li>{data.strMeasure3} {data.strIngredient3}</li>
                <li>{data.strMeasure4} {data.strIngredient4}</li>
                <li>{data.strMeasure5} {data.strIngredient5}</li>
                <li>{data.strMeasure6} {data.strIngredient6}</li>
                <li>{data.strMeasure7} {data.strIngredient7}</li>
                <li>{data.strMeasure8} {data.strIngredient8}</li>
                <li>{data.strMeasure9} {data.strIngredient9}</li>
                <li>{data.strMeasure10} {data.strIngredient10}</li>
                <li>{data.strMeasure11} {data.strIngredient11}</li>
                <li>{data.strMeasure12} {data.strIngredient12}</li>
                <li>{data.strMeasure13} {data.strIngredient13}</li>
                <li>{data.strMeasure14} {data.strIngredient14}</li>
                <li>{data.strMeasure15} {data.strIngredient15}</li>
                <li>{data.strMeasure16} {data.strIngredient16}</li>
                <li>{data.strMeasure17} {data.strIngredient17}</li>
                <li>{data.strMeasure18} {data.strIngredient18}</li>
                <li>{data.strMeasure19} {data.strIngredient19}</li>
                <li>{data.strMeasure20} {data.strIngredient20}</li>
            </ul>
            <h4 style={styles.insth4}><BsListTask style={styles.icon}/>Instructions</h4>
            <p style={styles.instructions}>{data.strInstructions}</p>
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
        listStyle:'none',
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
        fontSize:'1.5rem',
    }
}