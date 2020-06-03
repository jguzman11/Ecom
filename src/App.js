import React from 'react';
import './App.css';
import Products from './Products'
import Nav from './components/Nav'
import Contact from './components/contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carousel from './components/slider';
import Footer from './components/Footer';


// everything goes here
function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Products" component={Products} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
      <div>
    </div>
    </div>
    
  );
}



function Home() {
  return (
    <div className="text-title">
      <h1>7O4 Kicks</h1>
      <Carousel />
      <div>
        <Footer />
      </div>
    </div>
  )
};

export default App;
