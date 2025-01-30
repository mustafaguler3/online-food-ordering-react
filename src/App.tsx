import React, { useEffect } from "react";
import "./App.css";
import { Outlet, Route, BrowserRouter as Router, Routes, useLocation, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { useUser } from "./features/User/context/UserContext";
import { useCart } from "./features/Cart/context/CartContext";


function App() {
  
  return (
    <div className="bg-color">
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
