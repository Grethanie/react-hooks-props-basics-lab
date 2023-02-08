import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home city={user.city} color={user.color} name={user.name} />
      <About bio={user.bio} links={user.links}/>
    </div>
  );
}

export default App;
