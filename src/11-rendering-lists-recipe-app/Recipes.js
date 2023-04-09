import React from "react";
import { recipes } from "./data.js";

const Recipes = ({ name, ingredients }) => {
  return (
    <>
      {recipes.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
            <ul>
              <li key={item.id}>{`${item.ingredients}`}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Recipes;
