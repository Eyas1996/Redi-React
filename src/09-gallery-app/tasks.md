**Task 1**: Here’s a component that renders a sculpture image. Clicking the “Next” button should show the next sculpture by changing the `index` to `1`, then `2`, and so on. However, this won’t work. Fix it by adding a state to the component to keep track of the `index`.

**Task 2**: Add a button "Show details" and display text if the button is clicked. By default the text is hidden.

**Task 3**: Change the text of the "Show details" button to "Hide details" if the text is displayed. The botton will toggle between displaying and hiding the text.

**Task 4**: When you press “Next” on the last sculpture, the code crashes. Fix the logic to prevent the crash. You may do this by adding extra logic to event handler or by disabling the button when the action is not possible.

After fixing the crash, add a “Previous” button that shows the previous sculpture. It shouldn’t crash on the first sculpture.

**Bonus Task 4**: We want to see 2 galleries on the same page. Extract Gallery component in its own file. In the App file create Page component that will return 2 Galleries. Don't forget to import your Gallery component!

Source: https://react.dev
