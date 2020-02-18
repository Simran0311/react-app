
import React from "react";
import ReactDOM from "react-dom";
import Map from "./Map";

import "./styles.css";

function App() {
  return <Map center={{ lat: -24.9923319, lng: 135.2252427 }} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);