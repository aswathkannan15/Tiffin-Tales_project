import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Menus from "./Components/Menus";
import About from "./Components/About";
import BookTable from "./Components/BookTable";
import Contact from "./Components/Contact"; 

import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Tiffin & Tales"; 
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookTable />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
