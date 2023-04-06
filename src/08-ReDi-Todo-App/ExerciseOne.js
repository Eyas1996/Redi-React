import { peopleList } from "./people";

/**
 * 1. Render a list of people and display their name ✅ and their emoji ✅
 * 2. Only display people who are over 25 using if ✅
 * 3. Wrap the emoji in a button ✅
 * 4. When the user clicks on the button create an alert that says "<Person's name>'s favorite fruit is <person's favorite fruit>"
 */

export const ExerciseOne = () => {
  const handleClick = (event) => {
    const id = event.target.id;
    const name = event.target.name;
    const person = peopleList.find((person) => person.id === id);
    console.log(`${name}'s favorite fruit is ${person.favoriteFruit}`);
  };
  return (
    <ul>
      {peopleList.map(
        (person) =>
          person.age > 25 && (
            <li className={person.age > 25 && "over25"}>
              <p>{person.name}</p>
              <button
                className="emoji"
                id={person.id}
                name={person.name}
                onClick={handleClick}
              >
                <span role="img" aria-label="person emoji">
                  {person.emoji}
                </span>
              </button>
            </li>
          )
      )}
    </ul>
  );
};
