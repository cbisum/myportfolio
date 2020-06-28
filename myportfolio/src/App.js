import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Screen/Home';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import About from './Components/Screen/About'
import Skills from './Components/Screen/Skills'
import Projects from './Components/Screen/Projects'
import Contact from './Components/Screen/Contact'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' >
          <Navbar />
          <Home />
        </Route>

        <Route exact path= '/About'>
          <Navbar />
          <About />
        </Route>

        <Route exact path= '/Skills'>
          <Navbar />
          <Skills />
        </Route>


        <Route exact path= '/projects'>
          <Navbar />
          <Projects />
        </Route>

        <Route exact path= '/contact'>
          <Navbar />
          <Contact />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
