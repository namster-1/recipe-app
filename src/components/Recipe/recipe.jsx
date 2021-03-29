import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function Recipe({mealImg,mealName,mealInstruction,mealSource,mealCalories}) {




    return (
        <div>
            <div>
            <div className="recipe-container">
        <div className="meal">
            <div className="meal-img">
                <img src={mealImg} alt={mealName} />
            </div>
            <div className="meal-details">
                <h2 className="meal-title">{mealName}</h2>
                <p className="meal-instruction">{mealInstruction}</p>
                <ul className="meal-info">
                    <li>
                        source
                        <strong>{mealSource}</strong>
                    </li>
                    
                    <li>
                        Calories
                        <strong>{Math.floor(mealCalories)}</strong>
                    </li>
                </ul>
                
                <div className="btn-container">
                <Link to={"/recipe/"+mealName}>
                    <button className="btn">recipe</button>
                    </Link>
                </div>
                
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Recipe
