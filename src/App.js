import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import Slideshow from "./components/Slideshow/Slideshow"
import Header from "./components/Header/Header"
import HomeInfo from "./components/HomeInfo/HomeInfo"
import Footer from "./components/Footer/Footer"
import Calendar from "./components/Calendar/Calendar"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar></Navbar>

        <Switch>

          <Route path="/calendar">
            <Calendar></Calendar>
          </Route>

          <Route path="/">
            <Slideshow></Slideshow>
            <Header></Header>
            <HomeInfo></HomeInfo>
          </Route>
        </Switch>

        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
