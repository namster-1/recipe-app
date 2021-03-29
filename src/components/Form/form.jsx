import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Recipe from '../Recipe/recipe';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ActualRecipe from '../ActualRecipe/actualRecipe';
import RandomRecipe from '../RandomRecipe/randomRecipe';
import './style.css'



function Form() {

    const [meals,setMeals]=useState([]);
    const [searchValue,setSearchValue] = useState('');
    const [searched,setSearched] = useState(false)

    const appId='7d86f828';
    const appKey='51b239a88a8d21a1ef66fcd773f7cb43';
    const formApi=`https://api.edamam.com/search?q=${searchValue}&app_id=${appId}&app_key=${appKey}`



    
     
    const submit = (e)=>{
        e.preventDefault();
    }

    const getSearchValue= (e) =>{
        setSearchValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setSearched(true);
        if(searched){
            setSearched(false);
        }
    }
    useEffect(()=>{
        axios.get(formApi)
        .then((res)=>{
            // console.log(res);
            setMeals(res.data.hits)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[searched]);

        return (
            <Router>
                <Switch>
            <Route path="/" exact>
        <div>
             <RandomRecipe />
            <div>
                <form className="search-form" onSubmit={submit}>
                    <input className="search-input"
                     type="text" value={searchValue}
                      onChange={getSearchValue}
                      placeholder="search for any meal"
                       />
                    <button className="search-button"
                     type="submit"
                      onClick={handleSubmit}
                      >search</button>
                      
                </form>
                <div className="recipe">
                    {meals.map((recipe,idx)=>{
                        const {
                            label,
                            image,
                            source,
                            calories
                        }=recipe.recipe
                        idx=Math.floor(Math.random()*10000);
                        return <Recipe 
                        key={idx} 
                        mealName={label}
                        mealImg={image}
                        mealSource={source}
                        mealCalories={calories}
                        />
                    })}
                     </div>

            </div>
            
        </div>
        </Route>
        <Route path={"/recipe/:mealName"}>
            <ActualRecipe meal={meals} />
        </Route>
        </Switch>
        </Router>
    )
}

export default Form
