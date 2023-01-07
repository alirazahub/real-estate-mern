import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import PricePredition from './components/PricePredition';
import Contact from './components/Contact';
import Sell from './components/Sell';
import Buy from './components/Buy';
import Rent from './components/Rent';
import Team from './components/Team';
import Login from './components/Login';
import ForgetPasswordPage from './components/ForgetPasswordPage';
import Register from './components/Register';
import Admin from './components/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/price-predition">
            <PricePredition />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/sell">
            <Sell />
          </Route>
          <Route exact path="/buy">
            <Buy />
          </Route>
          <Route exact path="/contractors">
            <Team />
          </Route>
          <Route exact path="/rent">
            <Rent />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forget-password">
            <ForgetPasswordPage />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
