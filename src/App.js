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
                <label htmlFor="recipe-name">Recipe Name</label>
                <input className="textbox" name="recipe-name" placeholder="Recipe Name" type="text" id="recipe-name" aria-label="recipe-name" />
                <br/><br/>
                <label htmlFor="recipe-instruction">Recipe Instruction</label>
                <input className="textbox" name="recipe-instructions" placeholder="Recipe Instructions" type="text" id="recipe-instruction" aria-label="recipe-instruction" />
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
