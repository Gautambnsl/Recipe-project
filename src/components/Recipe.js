import React from "react";

const Recipe = function Recipe(props){
    const {recipes} = props;
    return(
       <div className="row">
        {
            recipes.map(recipe => (
                <div className='col-md-3 mt-3'>
                <div className='card pt-3 py-2 text-center'>
                <img src={recipe.recipe.image} className="img-fluid w-50 mx-auto rounded-circle" />
                <div className='card-body'>
                <h3>{recipe.recipe.label}</h3>
                </div>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item font-weight-bold">Ingredient :-</li>
                    {
                        recipe.recipe.ingredientLines.map(ingredient => (<li className=" list-group-item">{ingredient}</li>))
                    }
                </ul>
                </div>
            ))
        }
       </div>
    );
}

export default Recipe;