import React from "react";
import Meal from "./Meal"

export default function MealList({ mealData }) {
    const nutrients = mealData.nutrients;
    console.log(mealData)
    return (<main>
        <section className="nutrients">
            <h1>Macronutrients</h1>
            <ul>
                <li><strong>Calories:</strong> {nutrients.calories}</li>
                <li><strong>Fats:</strong> {nutrients.fat}</li>
                <li><strong>Carbohydrates:</strong> {nutrients.carbohydrates}</li>
                <li><strong>Protein:</strong> {nutrients.protein}</li>
            </ul>
        </section>
        <section className="meals">
            {mealData.meals.map((meal) => {
                return <Meal key={meal.id} meal={meal} />;
            })
            }
        </section>

    </main>
    )
}