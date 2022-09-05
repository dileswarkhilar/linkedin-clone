import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";

const App = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </main>
  );
};

export default App;
