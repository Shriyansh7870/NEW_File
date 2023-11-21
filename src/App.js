import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter>
    </div>
  );
};

export default App;
