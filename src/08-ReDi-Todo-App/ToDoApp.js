import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const defaultTodos = [
  {
    name: "Take the dog for a walk",
    isComplete: false,
    id: uuidv4(),
  },
  {
    name: "Finish my React homework",
    isComplete: false,
    id: uuidv4(),
  },
  {
    name: "Go for a walk",
    isComplete: true,
    id: uuidv4(),
  },
];

/**
 * Time to bring all of our new knowledge together!
 * Today we're going to create a simple to do list app.
 * 1. Iterate through the list of defaultTodos
 *  - Create a list of checkboxes
 *  - If a todo is complete apply the className complete
 *  - If a todo is complete the checkbox should be checked
 * 2. Update todos
 * - If you check the box of a todo it should be marked complete
 * - If you uncheck the box of a todo it should be marked incomplete
 * 3. Delete todos
 * - Add a delete button
 * - When clicked the correct todo is removed from the list
 * 4. Add todos
 * - Add a form & form input
 * - Add an "Add" button
 * - The use
 * r can enter a todo in the input and add it to the list by clicking the button or pressing enter
 * 5. Stretch
 * - While a user is typing if the todo already exists in the list add an error message for the user to let them know
 * - Add a counter of the remaining todos left that have not been completed yet
 */

export const ToDoApp = () => {
  const [todos, setTodos] = useState(defaultTodos);
  return (
    <div className="todoapp stack-large">
      <h1>ReDI Todo App</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <h2 id="list-heading">3 tasks remaining</h2>
      <li key={123}>
        <input id={123} type="checkbox" checked={false} />
        <label className="label" htmlFor={123}>
          Sample To Do
        </label>
        <button type="button" className="danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </li>
    </div>
  );
};
