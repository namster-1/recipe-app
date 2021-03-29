import React from 'react'
import {useParams} from 'react-router-dom'
import './style.css'


function ActualRecipe(props) {

    let {mealName}=useParams();
    console.log(props.meal);
  const  renderMeal = ()=>{
        let foundMeal=props.meal.find((name)=>name.recipe.label===mealName)
        return foundMeal;
    }

    let actualMeal=renderMeal();

    if(props.meal.length>0){
    return (
        <div className="food-container">
            
            <h1>{mealName}</h1>
            
            
            <img src={actualMeal.recipe.image} alt={mealName}/>
            
            <h3>ingredients:</h3>
            {
                actualMeal.recipe.ingredients.map((ingredient,idx)=>{
                    idx=idx=Math.floor(Math.random()*100000);
                    return (
                        <ul key={idx} className="ingredients">
                            <li key={idx}>
                                {ingredient.text}
                            </li>
                        </ul>
                    )
                })
            }
            <a href={actualMeal.recipe.shareAs}>click for more info</a>
        </div>
    )
        }else{
            return <h1>loading...</h1>
        }
}

export default ActualRecipe;