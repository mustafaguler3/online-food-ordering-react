import React from "react";
import "./App.css";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import '@fontsource/roboto/700.css';

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
