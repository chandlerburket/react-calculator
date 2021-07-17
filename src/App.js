import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  HashRouter as Router,
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';

const App = () => {

  return (
    <HashRouter>
      <div className="App">
        <div id="wrapper">
          <div id="calculator-wrapper">
        <div class="outer-menu">
        <input class="checkbox-toggle" type="checkbox" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            
         
            <div class="Menucontainer">
              <h1 class="porter">Chandler Burket</h1>
<div>                          <p>I am a highly motivated programmer and hard worker aspiring to build a career in software development. I am young and do lack experience but I love working with technology in my free time. I am very passionate about working with tech because of the many ways it has and can be applied. That is also why my main focus is on software development as it allows you to create anything and it allows computers to do all the things that make them so wonderful. I like working with hardware as well and believe it's important to have a fundamental understanding of it but software development is my main focus. I am willing to put in the outside hours learning and studying to prove I can be an asset</p>
</div>
            </div>

          </div>

        </div>
        </div>
            <Switch>
              <Route exact path="/" component={Calculator} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
