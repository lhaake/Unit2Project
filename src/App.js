import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>

      
      <Footer />
    </div>
  );
}

export default App;
