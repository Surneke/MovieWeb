import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navbar } from "./components/Header";
import {About, Home, Order,Login} from './pages';

export default function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/order"} element={<Order/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/about"} element={<About/>}/>
          </Routes>
        </div>
      </Router>
  );
}
