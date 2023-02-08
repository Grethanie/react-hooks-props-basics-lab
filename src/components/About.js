import React from "react";

function About(props) {
  const isBio = () => {
    if (props.bio) {
      return <p>{props.bio}</p>;
    }
  };
  return (
    <div id="about">
      <h2>About Me</h2>
      {isBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
