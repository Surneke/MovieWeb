import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navbar } from "./components/Header";
// import {About, Home, Order,Login} from './pages';
import {About} from './pages/about'
import {Movie} from './pages/movie'
import {Login} from './pages/login'
import {Home} from './pages/home'
import {Order} from './pages/order'
import { Divider } from "@mui/material";

export default function App() {
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
                <Route path={"/about"} element={<About/>}/>
              </Routes>
        </div>
      </Router>
  );
}
