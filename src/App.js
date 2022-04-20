import './App.css';
import React, {useState} from "react";

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [isShowingForm, setIsShowingForm] = useState(false);
    
    const renderRecipes = (recipes) => recipes.map((recipe)=> {
        console.log(recipes);
        return( 
            <li>{recipe}</li>
        );
    })
 
    const renderForm = () => {
        console.log('Here')
       let currRecipes = [...recipes];
        return (
            
            <form onSubmit={(event) => {
                currRecipes.push(event.target[0]._valueTracker.getValue());
                setRecipes(currRecipes);
                setIsShowingForm(false);
                event.preventDefault();
            }}>
                <input className="recipe-name" name="recipe-name" placeholder="Recipe Name" type="text" />
                <br/><br/>
                <input className="recipe-instructions" name="recipe-instructions" placeholder="Recipe Instructions" type="text" />
                <br/><br/>
                <input type="submit" value="Submit" />
            </form>
        );
        
    }
  return (
    <div>
        <h1 className="heading"> My Recipes </h1>
        <div>
            {
                recipes.length === 0  ?  <div>There are no recipes to list</div> : <ol>{renderRecipes(recipes)}</ol> 
            }
        </div>
        
        <div>
            {
                isShowingForm ? <div>{renderForm()}</div> : <button onClick={ () => setIsShowingForm(true)}>Add Recipe</button>
            }
        </div>
      <div className="doNotRemoveMe">Hello world.</div>
        {/* ^ Do not remove this element ^ */}
    </div>
      
      
  );
}

export default App;
