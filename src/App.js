//Imports 
import React from 'react';
import {Switch,Route} from "react-router-dom";

//CSS
import "./Components/css/styles.css";

//Component Imports
import Homepage from "./Components/Pages/Homepage";
import Projects from "./Components/Pages/Projects";
import Blogs from "./Components/Pages/Blogs";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" render={() => <Homepage/>}/>
          <Route exact path="/blog" render={() => <Blogs/>}/>
          <Route exact path="/projects" render={() => <Projects/>}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
