import React from "react";
import "./App.css";
import '@fontsource/roboto/700.css';
import 'remixicon/fonts/remixicon.css';
import { Outlet, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";


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
