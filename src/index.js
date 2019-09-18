import React from "react";
import { render } from "react-dom";

myGlobal = 4;
myGlobal2 = 5;

function Hi() {
  return <p>Hi!</p>;
}

render(<Hi />, document.getElementById("app"));
