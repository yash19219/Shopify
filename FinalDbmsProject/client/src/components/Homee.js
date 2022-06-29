import React from 'react'
import Navbar from './Navbar';
import Carousal from './Carousal';
import Card from './Card';
import Axios from "axios";
import { useState } from 'react';
import {useLocation} from 'react-router-dom';

function Homee() {
  const location = useLocation();
  // console.log('------INSIDE EMPLOYEE----------',location.state.userDetail[0].cid)
  // const { from } = location.state
  // console.log(from)
  const [productList, setproductList] = useState([]);
  // var information = "employee";
  Axios.get("http://localhost:3001/products").then((response) => {
  setproductList(response.data);
    });
    // productList.cid=location.state.userDetail[0].cid;

    Object.keys(productList).forEach(function(key) {
      // var row = productList[key];
      productList[key].cid=location.state.userDetail[0].cid;
      // console.log(row)
    });

    // productList['cid']=location.state.userDetail[0].cid;
    return (
      
        <div>
        <Navbar menuData={location.state.userDetail[0].cid}/> 
      <Carousal/>
      <Card  menuData={productList} />
    </div>
    );
  }
  
  export default Homee;
  