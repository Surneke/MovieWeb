import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navbar } from "./Components/Header";
// import {About, Home, Order,Login} from './pages';
import {About} from './Pages/about'
import {Movie} from './Pages/movie'
import {Login} from './Pages/login'
import {Sign} from './Pages/Sign'
import {Home} from './Pages/home'
import {Order} from './Pages/order'
import { Divider } from "@mui/material";
import {Footer } from './Components/Footer'

export const App = () => {
  return (
      <Router>
        <div>
          <Navbar/>
            <Divider/>
              <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/movie"} element={<Movie/>}/>
                <Route path={"/order"} element={<Order/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/sign"} element={<Sign/>}/>
                <Route path={"/about"} element={<About/>}/>
              </Routes>
            <Footer/>
        </div>
      </Router>
  );
}
