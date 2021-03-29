import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './style.css'
function RandomRecipe() {

    const [meal,setMeal] = useState([]);
    const API='https://www.themealdb.com/api/json/v1/1/random.php'

    useEffect(()=>{
        axios.get(API)
        .then((res)=>{
            // console.log(res);
            setMeal(res.data.meals)

        })
        .catch((err)=>{
            console.error(err);

        })
    },[]);


    if(meal.length>0){
        const {
            strMeal,
            strMealThumb,
            strCategory,
            strArea,
            strInstructions
        }=meal[0];
    return (
        <div>
            <div className="container">
            <div className="random-meal-header">
            <h1>Featured Meal</h1>
            </div>
        <div className="meal">
            

            <div className="meal-img">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="meal-details">
                <h2 className="meal-title">{strMeal}</h2>
                <p className="meal-instruction">{strInstructions&&strInstructions.substring(0,180)+"..."}</p>
                <ul className="meal-info">
                    <li>
                        category
                        <strong>{strCategory}</strong>
                    </li>
                    
                    <li>
                        area
                        <strong>{strArea}</strong>
                    </li>
                </ul>
                <div className="btn-container">
                </div>
            </div>
        </div>
        </div>
        </div>
    )
    }else{
        return <h1>loading</h1>
    }
}

export default RandomRecipe
