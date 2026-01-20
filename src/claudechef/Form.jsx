import { useState } from "react";
import ClaudeRecipe from "./claudeRecipe";
import IngredeintList from "./IngredientList";
import { getRecipeFromGroq } from './ai'




export default function Form() {
  const [items, setItems] = useState([])

  const list = items.map((item) => <li key={item}>{item}</li>);

  function formSubmitted(event) {
    event.preventDefault();
    const newIngredient = new 
    FormData(event.currentTarget).get("ingredient");
    setItems(prevIetms => [...prevIetms, newIngredient])

  }

  function addIngredient(formData) {
    const Ingredeint = formData.get("ingredient")
    setItems(prevIngredient => [...prevIngredient, Ingredeint])
  }

  const [recipe, setRecipe] = useState("")

  async function GetRecipe() {
    const recipeMarkDown = await getRecipeFromGroq(items)
    setRecipe(recipeMarkDown)
  }

  return (
    <main>
      <div>
        <h2 className="heading">
          Your Personal AI Chef
        </h2>
        <p className="welcomep">
          Welcome! Got a few ingredients hanging out in your kitchen? Toss them in here and let Chef Claude work some tasty magic. Great meals are just a few clicks away!
        </p>
        <form action={addIngredient} className="input-form" >
          <input
            type="text"
            placeholder="e.g. Chicken"
            aria-label="Add Ingredient"
            name="ingredient"
            required
          />
          <button>Add Ingredient</button>
        </form>
      </div>
      
      {list.length > 0 && <IngredeintList list = {list} getRecipe = {GetRecipe}/>}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
