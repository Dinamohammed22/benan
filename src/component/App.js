import React, { Component } from "react";
import Mainpage from "./Mainpage";
import Navbar from "./Navbar";
import CommonQA from "./CommonQA";
import Whous from "./Whous";
import GroupOfImages from "./GroupOfImages";
import System from "./System";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Animation from "./Animation";
import Dropdown3 from "./Dropdown3";
import Animation2 from "./Animation2";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter><Navbar />
      <div className="app">
        

        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/CommonQA" element={<CommonQA />} />
          <Route path="/Whous" element={<Whous />} />
          <Route path="/GroupOfImages" element={<GroupOfImages />} />
          <Route path="/System" element={<System />} />
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
