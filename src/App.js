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
import StaticImage from "./components/StaticImage/StaticImage"
import Header from "./components/Header/Header"
import HomeInfo from "./components/HomeInfo/HomeInfo"
import GameJamInfo from "./components/GameJamInfo/GameJamInfo"
import Footer from "./components/Footer/Footer"
import Calendar from "./components/Calendar/Calendar"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path="/calendar">
            <Navbar color='#24254f' hover='#454797'></Navbar>
            <Calendar></Calendar>
          </Route>

          <Route path="/gamejams">
            <Navbar color='#042805' hover='#459745'></Navbar>
            <StaticImage></StaticImage>
            <Header 
              text="TestJam: SMU GDC's Inaugural GameJam."
              img='svg/TestJamHeader.svg'>
            </Header>
            <GameJamInfo></GameJamInfo>
          </Route>

          <Route path="/">
            <Navbar color='#24254f' hover='#454797'></Navbar>
            <Slideshow></Slideshow>
            <Header 
              text="We are SMU's Flagship Organization for Game Design and Development."
              img='svg/DallasSkyline.svg'>
            </Header>
            <HomeInfo></HomeInfo>
          </Route>
        </Switch>

        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
