import React, { useState } from "react";
import ReactDOM from "react-dom";
import Hamburger from "./hamburger";

import "./hammenu.module.css";

function App() {
  const [isHamburger, setIsHamburger] = useState("true");
  const myFunction = (isHamburger = true) => {
    setIsHamburger(isHamburger);
  };
  return (
    <div className="App">
      {/* <h1>{isHamburger ? "Hamburger" : "Cross"}</h1> */}
     
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Hamburger
          size={30}
          colors={{ hamburger: "black", cross: "black" }}
          delay="0.5s"
          alsoRun={myFunction}
          
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
