import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Login/>} ></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </main>
  );
};

export default App;
