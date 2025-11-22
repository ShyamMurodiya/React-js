import React, { Component } from "react";
import Navbar from "./components/Cards";
import Cards from "./components/Cards";


export class App extends Component {
  render() {
    return (
    <div className="parent">
      <div><Cards/></div>
      <div><Cards/></div>
      <div><Cards/></div>
      <div><Cards/></div>
      <div><Cards/></div>
      <div><Cards/></div>
      <div><Cards/></div>
      <div><Cards/></div>
    </div>
    );
  }
}

export default App;
