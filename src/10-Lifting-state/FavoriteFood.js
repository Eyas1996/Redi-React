import React from "react";

const FavoriteFood = ({ food, onFoodChange, onBlurF, onclickF }) => {
  return (
    <div>
      <div>
        <label htmlFor="foodInput">Favorite food: </label>
        <input
          id="foodInput"
          value={food}
          onChange={onFoodChange}
          onBlur={onBlurF}
        />
      </div>
    </div>
  );
};

export default FavoriteFood;
