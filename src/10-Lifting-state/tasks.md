

In this exercise we are going to `lift state`: move the state from child component to parent component so it can pass it to another child component.

**Task 1**: `Display` component has to to render a text depending on the inputs. First pass the `name` prop to it instead of "Mario" we will have the name from the input.

**Task 2**: We also want to pass favorite food from the input and display it instead of `lasagna`. However the state currently `lives` in the FavoriteFood component and cannot be passed to the Dispaly component.
Move `food` state to the app component. Pass `food` prop to the Display component.

**Task 4**: Oh no, our product manager changed his mind!
He only wants to display.
`Your favorite food is: ${food}!`
There is no need to keep `name` state in the App anymore. Move it into the `Name` component

**BONUS Task** Honestly it looks messy, it's too many components in one file! Extract each component in its own file and ipmport it into `App.js`. Make sure everything is still working correctly!
