import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  // My way (probably bad) before seeing what was shown in lecture
  /* const ingredients = [];

  // Iterate over ingredients prop and push to an array
  for (let ingredient in props.ingredients) {
    for (let i = props.ingredients[ingredient]; i > 0; i--) {
      ingredients.push(ingredient);
    }
  }

  // Map each ingredient in the array to a BurgerIngredient
  const burgerIngredients = ingredients.map((ingredient, index) => {
    return <BurgerIngredient key={index} type={ingredient} />;
  }); */

  /* Object.keys(props.ingredients) creates an array containing the properties in the props.ingredients as strings,
  e.g. ['meat', 'cheese', 'lettuce']
  Next, we map over this array and each ingredient key, e.g. meat, is used to 
  return an empty array with a length equal to its value.
  e.g. if the props.ingredient was
  { meat : 2, cheese: 2, lettuce: 1},
  we would have arrays of length 2, 2, and 1. We cannot map over just Array(2) or Array(1) though, since those 
  arrays don't have an index property yet. Using the spread, ..., operator, we create an indexed array that we can map over,
  e.g. [...Array(2)]
  The second map call fills each element in the empty array with a BurgerIngredient of the corresponding type. */
  const ingredientNames = Object.keys(props.ingredients);
  console.log("Ingredient Names array:", ingredientNames);
  const transformedIngredients = ingredientNames
  .map(igKey => {
    console.log("Ingredient key:", igKey);
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      console.log("Empty array entry:", _);
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  console.log("Transformed Ingredients:", transformedIngredients);

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default Burger;