import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navbar } from "./components/header";
import { Home } from "./pages/home";
import { Order } from "./pages/order";
import { Login } from "./pages/login";
import { About } from "./pages/about";

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
