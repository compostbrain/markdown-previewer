import React, { Component } from "react";
import Previewer from "./components/Previewer";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <p className="App-intro">
          Enter Markdown, Instantly View Preview:
          <Previewer />
        </p>
      </div>
    );
  }
}
