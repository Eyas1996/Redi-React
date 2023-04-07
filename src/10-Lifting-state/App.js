import { useState } from "react";

// import Name from "./Name";
import Display from "./Display";
import FavoriteFood from "./FavoriteFood";

function App() {
  const [food, setFood] = useState("");

  return (
    <form className="mx-auto mt-5 w-25">
      {/* <Name/> */}
      <FavoriteFood
        food={food}
        onFoodChange={(event) => setFood(event.target.value)}
        onBlurF={() => setFood("")}
      />
      <Display food={food} />
    </form>
  );
}

export default App;
