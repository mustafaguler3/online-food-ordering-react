import React from "react";
import "./App.css";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Navbar } from "./features/Catalog/Navbar";
import Footer from "./features/Catalog/Footer";


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
