import React from 'react'
import Navbar from './Navbar';
import Carousal from './Carousal';
import { useLocation } from 'react-router-dom'
import Axios from "axios";
import { useState } from 'react';
import './Check.css';

function Cart() {
    const location = useLocation()
  const { from } = location.state
    // const [id, setID] = useState(0);
    // const [cost, setcost] = useState(0);
    // const [cid, setcid] = useState(0);
    // const [pid, setpid] = useState(0);
    
  
    const [productList, setproductList] = useState([]);
    const cart = () => {
      Axios.post("http://localhost:3001/cart", {
        cartid:from.cid,
            cost: from.price,
            cid:from.cid,
            pid:from.pid,
       
      }).then(() => {
        setproductList([
          ...productList,
          {
            cartid:from.cid,
            cost: from.price,
            cid:from.cid,
            pid:from.pid,
          },
        ]);
        // console.log("ff ",productList);
      });
    };
    // console.log("jod",from)
   console.log("jj ",from.cid);
  //  setpid(from.pid);
  //  setcost(from.cost);
  //  setcid(from.cid);
  //  setID(from.cid);


    return (
        <div>
           
           
        <Navbar/> 
        <div className="wrapper">
      {/* <h1>hii</h1> */}
      <button onClick={cart} className="btn btn-block create-account">ADD PRODUCT</button>
      <h1>Order placed</h1>
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
     
      {/* <h1>go to home</h1> */}
    </div>
      
      

      {/* {
        console.log("kdflk ",productList);
      }); */}
      
    </div>
    );
  }
  
  export default Cart;
  