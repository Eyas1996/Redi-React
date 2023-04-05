import React from "react";
import { mySkills } from "./mySkills";

export default function App() {
  const [desc, setDesc] = React.useState();

  return (
    <div className="App">
      <h1>Welcome to my portfolio</h1>
      <h2>here is a list of my skills</h2>
      <p> {desc} </p>
      <ul className="skills-list">
        {/* render a list of your skills here
          each skill should :
          - display a photo of the skill
          - display the name of the skill
          - have on click handler to display more details about the skill
          - clicking on the same skill should hide the description
          - clicking on a new skill while there is already a description displayed should show the new one
          
          TIPS :
          - use an li tag to render each skill group
          - add the class "skill-item" to your li to use the pre-defined CSS rules
          - do not forget to pass a unique key to your li 
        */}

        {mySkills.map((skill, index) => {
          return (
            <li
              key={index}
              className="skill-item"
              onClick={() => setDesc(skill.description)}
            >
              <img src={skill.img} alt={skill.name} />
              {`${skill.name}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
