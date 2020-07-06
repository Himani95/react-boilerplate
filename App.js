import React, { Component } from 'react';
//import './Login.js';
import LoginForm from './components/LoginForm.js';
import DetailsForm from './components/DetailsForm.js';
//import { NavLink, Switch, Route } from 'react-router-dom';
//import "./App.css";
/*Date: 29 June 2020
Author: Himani
Description: React Router
BrowserRouter: To add the ability of handling routing in React
(Renamed as Router since long name)
Route: Renders out a component based on the URL
Switch: Stops the whole process of going through all the routes and just renders a specific component*/
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

/*Date: 4 July 2020
Author: Himani
Description: To demonstrate the utility of Node/Express server(Server Side Rendering)
We have created a new module using extends and passed props to the constructor and super class
and set the state to apiResponse with currently an empty value*/
class App extends Component {
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }
  /*Date: July 4 2020
  Author: Himani
  Description: Utility of Node/Express server
  A function created which generates a call to that API url*/
  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())//Generate a call to response.text
    .then(res => this.setState({apiResponse: res}));//Set state to the response that comes from the mentioned url which is a string
  }
/*Date: 4 July 2020
Author: Himani
Description: To utilize the Node/Express server
A function which is called the moment the component 
is initialized on the screen which futher 
generates a call to the above function*/

/*this.state.apiResponse= prints the message*/
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
