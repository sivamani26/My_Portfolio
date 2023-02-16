import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import BookADemo from "./routes/BookADemo";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/About" element={<About/>} />
      <Route path="/Project" element={<Project/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/BookADemo" element={<BookADemo/>} />
   </Routes>
   </>
  );
}

export default App;
