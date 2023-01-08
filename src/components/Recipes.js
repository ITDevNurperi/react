import React, {useState} from 'react';
import {data} from "./resipesData";

const Recipes = () => {

    const [meals,setMeals] = useState(data)

    return (
        <div className="container">
            <div className="recipes">
                <h1>Вкусные рецепты</h1>

                {
                    meals.map(el => (
                        <>
                            <h2>{el.name}</h2>
                            <ol>
                                {
                                   el.ingredients.map(ingredient => (
                                       <li>
                                           {ingredient.name}
                                       </li>
                                   ))
                                }
                            </ol>

                            <h2>Инструкция по приготовлению</h2>
                            <ul>
                                {
                                    el.steps.map(step => (
                                        <li>{step}</li>
                                    ))
                                }
                            </ul>

                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default Recipes;