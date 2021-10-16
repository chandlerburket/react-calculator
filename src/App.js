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
              <h1 class="porter">Formulas</h1>
                  <p>Arithmetic mean (average) = Sum of values / Number of values</p>
                  <p>Probability = Target outcomes / Total outcomes</p>
                  <p>Slope Formula: Slope = y₂ – y₁ /  x₂ – x₁</p>
                  <p>Slope Intercept: y=mx+b</p>
                  <p>Midpoint Formula: (x₁+x₂) / 2, (y₁+y₂) / 2</p>
                  <p>Area of Triangle: area = (1/2) (base) (height)</p>
                  <p>Pythagorean Theorem: a²+b²=c²</p>
                  <p>Area of Rectangle: area = length x width</p>
                  <p>Area of Parallelogram: area = base x height</p>
                  <p>Sine (SOH): Sine = opposite / hypotenuse</p>
                  <p>Cosine (CAH): Cosine = adjacent / hypotenuse</p>
                  <p>Tangent (TOA): Tangent = opposite / adjacent</p>



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
