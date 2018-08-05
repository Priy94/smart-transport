import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import bgImage from "./Images/backgroundImage.jpg";

class App extends Component {

  render() {
    return (
      <div className = "App">
      <div id="SearchBoxComp">
      <h1 className = "text-center" id = "SearchTitle">
        Enter your Desired location 
      </h1>
        <form action="">
          <div className = "form-group"><input type="text" className = "form-control" placeholder = "enter your location..."/></div>
          {/* <button className="btn btn-primary">Sure</button> */}
        </form>
      </div>
      </div>
    );
  }
}

export default App;
