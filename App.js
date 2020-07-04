import React, { Component } from 'react';
//import './Login.js';
import LoginForm from './components/LoginForm.js';
import DetailsForm from './components/DetailsForm.js';
//import { NavLink, Switch, Route } from 'react-router-dom';
//import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import MainPage from "./pages";
import loadspinner from "./pages";
import SecondPage from './pages/details.jsx';
import { BeatLoader } from 'react-spinners';
import img from './pages/loadingimg.jsx';

/*function App() {
  return (
    <div className="App">
      <h1>Welcome Onboard!!</h1>  
      <LoginForm />
    </div>
  );
}*/

//Redirect is used to match the path to the exact page
//July 1: LoginForm-> MainPage(first route tag changed)

//July 3: <BeatLoader timeout={3000} />...to show the loading spinner

class App extends Component {
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }
  //added on July 4:
  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
    
  }
  render () {
    return (
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/loading" component={loadspinner} />
      <Route exact path="/Details" component={SecondPage} />      
      <Redirect to="/Details"/> 
      </Switch>
    <p>{this.state.apiResponse}</p>
    </Router>
    );
  }

  
  

}


export default App;
