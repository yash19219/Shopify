import React from 'react'
import Axios from "axios";
import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import EmpNav from './EmpNav';
import FinalEmp from './FinalEmp';

function EmpHome() {
  const location = useLocation();

  const [productList, setproductList] = useState([]);
 
  Axios.get("http://localhost:3001/products").then((response) => {
  setproductList(response.data);
    });
    
    return (
      
        <div>
        <EmpNav menuData={location.state.userDetail}/> 
      <FinalEmp/>
    </div>
    );
  }
  
  export default EmpHome;
  