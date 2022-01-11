import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=8d473af42f0c4a6f84a6a228086afb0a&includeNutrition=false`)
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image);
            })
            .catch(() => {
                console.log("Error");
            });
    }, [meal.id])
    return (
        <article>
            <h1> {meal.title} </h1>
            <img src={imageUrl} alt="recipe" />
            <ul className="meal-instructions">
                <li>Preperation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings} </li>

            </ul>
            <a href={meal.sourceUrl}>Go to recipe</a>
        </article>
    )
}