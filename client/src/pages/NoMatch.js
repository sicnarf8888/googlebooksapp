import React from "react";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Jumbotron>
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Sad face Emoji">
        🙁
        </span>
      </h1>
    </Jumbotron>
  );
}

export default NoMatch;
