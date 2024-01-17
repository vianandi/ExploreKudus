import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Navbar2 from "./component/Navbar2";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLogin2 from "./pages/admin/AdminLogin2";
import Footer from "./component/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Maps from "./pages/Maps";
import Content from "./pages/Content";
import Admin from "./pages/admin/Adminpage";
import TourData from "./pages/admin/TourData";
import Home from "./pages/Home";
import Alltourism from "./pages/Alltourism";
import Admin_pesan from "./pages/admin/Admin_pesan";
import NavbarAdmin from "./component/NavbarAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/adminlogin2" element={<AdminLogin2 />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin2" element={<NavbarAdmin />}>
          <Route path="/admin2/pesan" element={<Admin_pesan />} />
          <Route path="/admin2" element={<TourData />} />
        </Route>
        {/* <Route path="/admin2" element={<TourData />} /> */}
        <Route
          path="/content/:id"
          element={
            <>
              <Navbar2 />
              <Content />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <Navbar2 />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/maps"
          element={
            <>
              <Navbar2 />
              <Maps />
              <Footer />
            </>
          }
        />
        <Route
          path="/tourism"
          element={
            <>
              <Navbar2 />
              <Alltourism />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar2 />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar2 />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
