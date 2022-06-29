import React from 'react'
import Navbar from './Navbar';
import {useNavigate} from "react-router-dom"
import Carousal from './Carousal';
import { useLocation } from 'react-router-dom'
import Axios from "axios";
import { useState } from 'react';
import './Check.css';

function Checkout() {
    const location = useLocation()
  const { from } = location.state
    // const [id, setID] = useState(0);
    // const [cost, setcost] = useState(0);
    // const [cid, setcid] = useState(0);
    // const [pid, setpid] = useState(0);
    console.log("ff ",from);
    let navigate=useNavigate();
  
    const [productList, setproductList] = useState([]);
    const Checkout = () => {
      Axios.post("http://localhost:3001/checkout", {
        cartid:from,
            
       
      }).then(() => {
        setproductList([
          ...productList,
          {
            cartid:from,
            
          },
        ]);
        // console.log("ff ",productList);
      });
    };
    

   // navigate("/Home")


    return (
        <div>
           
           
           <Navbar/> 
      {/* <Carousal/> */}

   
    <div className="wrapper">
      {/* <h1>hii</h1> */}
      <button onClick={Checkout} className="btn btn-block create-account" id="myHeader">confirm checkout</button>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
     
      <h1>go to home</h1>
    </div>
  

      
      
      


      
    </div>
    );
  }
  
  export default Checkout;
  