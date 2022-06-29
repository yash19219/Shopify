import "./App.css";
import Login from "./components/Login";
// import finalemployeee from './componenets/Finalemployeee';
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Homee from "./components/Homee";
import SelectiveCardInfo from "./components/SelectiveCardInfo";
import PenInfo from "./components/PenInfo";
import PhoneInfo from "./components/PhoneInfo";
import LaptopInfo from "./components/LaptopInfo";
import FinalEmp from "./components/FinalEmp";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import EmpHome from "./components/EmpHome";
import Dashboard2 from "./dashboard/Dashboard2";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {<Route path="/" element={<Login />} />}
          <Route path="/Home" element={<Homee />} />

          <Route path="/HomeEmp" element={<EmpHome />} />
          <Route path="/productss" element={<SelectiveCardInfo />} />

          <Route path="/Employee" element={<FinalEmp />} />

          <Route path="/Pen" element={<PenInfo />} />
          <Route path="/Phone" element={<PhoneInfo />} />
          <Route path="/Laptop" element={<LaptopInfo />} />

          <Route path="/cart" element={<Cart />} />
          
          <Route path="/DashBoard" element={<Dashboard2/>} />
         
          <Route path="/employeeDetails" element={ <Details/>} />

          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/About" element={<FinalAbout/>} />
        <Route path="/Contact" element={<FinalContact/>} />
        <Route path="/all" element={<Navbar />} />
        
        <Route path="/Profile" element={<FinalEmp/>} />
        
        <Route path="/productss" element={<SelectiveCardInfo menuData={productList1}/>} /> */}
        </Routes>
        <div>
          <footer
            id="sticky-footer"
            className="flex-shrink-0 py-4 bg-dark text-white-50"
          >
            <div className="container text-center">
              <small>Copyright &copy; Shopify</small>
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
