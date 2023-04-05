import { fetchUser } from "./utils";
import { Logo } from "./Logo";

export default function App() {
  const user = fetchUser();
  console.log(user);

  return (
    <div className="App">
      <nav className="navbar">
        <Logo />

        <button>{user.isLoggedIn ? "logout" : "login"}</button>
        {/* your part here : 
          - if the user is not logged in : render a button that says "login"
            
          - if the user is logged in :
            render a button that says logout and
              - if the user has a username : render a greeting message with the username "Welcome Firas !"
              - if the user does not have a user name : render "Welcome back !""

        */}
      </nav>
      <div>
        <p>{(user.isLoggedIn && `Welcome ${user.username}`) || "Welcome back!"}</p>
      </div>
    </div>
  );
}
