
// import React from "react";
import Navbar from './Navbar';

import React, { useState } from 'react';
import Axios from "axios";

import Card from './Card';
import Carousal from './Carousal';

function PenInfo() {
  const [productList, setproductList] = useState([]);
 
  Axios.get("http://localhost:3001/Pen").then((response) => {
  setproductList(response.data);
    });
   
  
      return (
          <>
          <Navbar/> 
          <Carousal/>
          <Card menuData={productList} />
    
    {/* <SelectiveCard menuData={productList}/> */}
          </>
        
        
      );

    
}

export default PenInfo;
