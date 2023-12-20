import React from "react";
import {BrowserRouter, Routes, Route, Link, Form, HashRouter } from "react-router-dom";
import Home from './Home/Home'
import { useState } from "react";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Qr from "./components/Qr";
import Test from "./components/Test";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/facilities" element={<Qr/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          </Routes>
       </>
      // <Test/>
    )
  );
}

export default App;
