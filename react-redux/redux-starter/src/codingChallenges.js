// 1. Write code in a functional style to convert the input to the output:
input = { tag: "JAVASCRIPT" }
output = "(javascript)"


// Answer 1

function convertInput(obj) {
  return `(${obj.tag.toLowerCase()})`
}

convertInput(input) // => "(javascript)"

// 2. We have a recipe object as follows:
recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"]
}

/* Assuming that this object is immutable, write code to
-Add a new ingredient (“cream”)
-Replace “egg” with “egg white”
-Remove an ingredient (“egg”) */

// Answer 2

import { produce } from 'immer'

function addIngredient(recipe) {
  return produce(recipe, draftRecipe => {
    const index = recipe.ingredients.indexOf("egg")
    draftRecipe.ingredients.push("cream")
    draftRecipe.ingredients[index] = "egg white"
  })
}

addIngredient(recipe)
// =>
// recipe = {
//   name: "Spaghetti Bolognese",
//   ingredients: ["egg white", "salt", "cream"]
// }
