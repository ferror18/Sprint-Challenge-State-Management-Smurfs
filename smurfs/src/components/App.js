import React, { Component } from "react";
import "./App.css";
import { SmurfForm } from "./SmurfForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS COLLECTION</h1>
        <SmurfForm/>
      </div>
    );
  }
}

export default App;
