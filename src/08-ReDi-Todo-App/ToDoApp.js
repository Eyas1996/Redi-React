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
 * - The user can enter a todo in the input and add it to the list by clicking the button or pressing enter
 * 5. Stretch
 * - While a user is typing if the todo already exists in the list add an error message for the user to let them know
 * - Add a counter of the remaining todos left that have not been completed yet
 */

export const ToDoApp = () => {
  const [todos, setTodos] = useState("");

  const [checked, setChecked] = useState(false);


  // to prevent the default form behavior of submitting
  const handleSubmit = (e) => e.preventDefault();

  const handleClick = () => setChecked(!checked);

  const handleRemove = (e) => e.target.parentElement.remove();
  
  const handleAdd = () => {
    let task = {
      name: todos,
      isComplete: false,
      id: uuidv4(),
    }
    setTodos(defaultTodos.push(task))

  };


  return (
    <div className="todoapp stack-large">
      <h1>ReDI Todo App</h1>
      <form onSubmit={handleSubmit}>
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
          onChange={e => setTodos(e.target.value)}
          value={todos}
        />
        <button onClick={handleAdd} type="submit" className="btn btn-outline-primary btn-sm mx-1">
          Add
        </button>
      </form>
      <h2 id="list-heading">3 tasks remaining</h2>
      {defaultTodos.map(function (task) {
        return (
          <li key={task.id}>
            <input
              onClick={handleClick}
              id={task.id}
              type="checkbox"
              checked={checked}
            />
            <label
              className={checked ? "complete label" : "label"}
              htmlFor={task.id}
            >
              {task.name}
            </label>
            <button onClick={handleRemove} type="button" className="btn btn-outline-danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </li>
        );
      })}
      {/* <li key={123}>
        <input id={123} type="checkbox" checked={false} />
        <label className="label" htmlFor={123}>
          Sample To Do
        </label>
        <button type="button" className="danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </li> */}
    </div>
  );
};
