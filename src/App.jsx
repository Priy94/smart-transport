import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './hardCodedData';
// import bgImage from "./Images/backgroundImage.jpg";
const url = "http://localhost:4000/";
function createFetchData(data){
  const fetchData = 
    {
        method: 'POST',
        body: JSON.stringify({query:data}),
        headers: {
          "Content-type": "application/json",
        }
    };
  return fetchData;
}


class App extends Component {
  state = {
    choice: undefined,
    hide: true,
    data: []
  }

  clear(){
    this.setState({
      choice: ""
    })
  }
  selectItem(item){
    console.log("item is:", item);
    this.setState({
      choice:item,
      hide:true
    })
  }
  search(e){
    this.setState({
      choice: e.target.value
    })
    if(e.target.value.length >= 3)
    fetch(url, createFetchData(e.target.value))
    .then(res => res.json())
    .then(res => {
      this.setState({
        data: res.data,
        hide: false
      })
      // console.log('result is:', res)
    })
    .catch(e => console.log(e))
  }

  render() {
    const list = this.state.data.map((item, index)=> {
      return <li key ={index} onClick = {e => this.selectItem(item)}>
        {item}
      </li>
    })

    return (
      <div className = "App">
      <div id="SearchBoxComp">
      <h1 className = "text-center" id = "SearchTitle">
        Enter your Desired location 
      </h1>
          <div id = "search-container">
            <div className = "form-group">
              <input name = "searchBox" onFocus = {this.clear.bind(this)} value = {this.state.choice} type="text" onChange = {this.search.bind(this)} className = "form-control" placeholder = "enter your location..."/>
            </div>
          <ul id = "search-ul" className = {this.state.hide ? "hide" : ""}>
            {list}
          </ul>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
