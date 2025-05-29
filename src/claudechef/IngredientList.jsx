import { useState } from "react";

export default function IngredeintList(props) {
    return (
        <>
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="listt">{props.list}</ul>
                {props.list.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="btn" onClick={props.getRecipe}>Get a recipe</button>
                </div>}
            </section>
        </>
    )
}