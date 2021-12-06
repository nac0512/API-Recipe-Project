import React from 'react';
import Thumbnail from './Thumbnail';

const Food = ({data}) => {
    return (
        <article key={data.id}>
            <Thumbnail imgSrc={data.strMealThumb} imgAlt={`Finished result of ${data.strMeal}`}/>
            <h3>{data.strMeal}</h3>
            <p>Cuisine: {data.strArea} | Category: {data.strCategory} | Tags: {data.strTags}</p>
            <h4>Ingredients</h4>
            <ul>
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
            <h4>Instructions</h4>
            <p>{data.strInstructions}</p>
            <h4>Video</h4>
            <p>{data.strYoutube}</p>
        </article>
    );
}

export default Food;