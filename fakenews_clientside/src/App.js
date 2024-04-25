import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Register from "./Components/Register";
import News from "./Components/News";
function App() {
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  return (
    <div className="App">
      <HashRouter>
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<News />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="" element={<Header />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </HashRouter>
    </div>
  );
}

export default App;
