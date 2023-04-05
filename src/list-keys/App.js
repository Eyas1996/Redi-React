import React from "react";

const allItems = [
  { id: "a", value: "apple" },
  { id: "o", value: "orange" },
  { id: "g", value: "grape" },
  { id: "p", value: "pear" },
];

export default function App() {
  const [items, setItems] = React.useState(allItems); // review useState
  const [focusItem, setFocusItem] = React.useState();

  function addItem() {
    //adds the missing item
    setItems([...items, allItems.find((item) => !items.includes(item))]);
  }

  function removeItem(itemToRemove) {
    setItems(items.filter((item) => item !== itemToRemove));
  }

  return (
    <div className="App">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>

      {items.map((item) => {
        return (
          <div key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{" "}
            <label>{item.value}</label>{" "}
            <input
              defaultValue={item.value}
              onFocus={(event) => {
                setFocusItem(event.target.value);
              }}
              onBlur={() => {
                setFocusItem(null);
              }}
            />
          </div>
        );
      })}

      {focusItem && <p>{focusItem}</p>}
    </div>
  );
}

// credit https://github.com/kentcdodds/beginners-guide-to-react/tree/codesandbox/23-rendering-lists
