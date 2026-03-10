import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Nav";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact_Us/Contact";
import Login from "./Components/Login/Login";
import Prediction from "./Components/Prediction/Prediction";
import History from "./Components/History/history";
import Register from "./Components/Register/register";

import "./App.css";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/prediction" element={<Prediction />} />

        <Route path="/History" element={<History />} />

        <Route path="/Register" element={<Register />} />

      </Routes>

    </Router>
  );
}

export default App;