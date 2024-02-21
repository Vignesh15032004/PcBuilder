import React from 'react';
import Navbar from "./component/Navbar";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Service from "./component/Service";
import Contact from "./component/Contact";
const App = () => {
    return(
       <>
        <Router>
       <Navbar/>
      
        <Switch>
          <Route path='/' component={Home} exact><Home /></Route>
          <Route path='/about' component={About} exact><About /></Route>
          <Route path='/skills' component={Skills} exact><Skills /></Route>
          <Route path='/services' component={Service} exact><Service/></Route>
          <Route path='/contact' component={Contact} exact><Contact /></Route>
        </Switch>
       </Router>
       </>
    )
}

export default App;