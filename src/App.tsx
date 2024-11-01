import React from "react";
import "./App.css";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
import { Home } from "./components/Home";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div>
      <ToastContainer/>
        <Navbar />
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
