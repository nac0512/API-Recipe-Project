import React from 'react';
import Button from './Button';
import Thumbnail from './Thumbnail';

const Drink = ({data}) => {
    return (
        <article key={data.id}>
            <Thumbnail imgSrc={data.strDrinkThumb} imgAlt={`Finished result of ${data.strDrink}`}/>
            <h3>{data.strDrink}</h3>
            <p>Category: {data.strCategory} | Alcoholic: {data.strAlcoholic} | Glass: {data.strGlass}</p>
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
            </ul>
            <h4>Instructions</h4>
            <p>{data.strInstructions}</p>
            <Button content="New Search"/>
        </article>
    );
}

export default Drink;