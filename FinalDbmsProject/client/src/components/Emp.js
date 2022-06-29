import React from 'react'
import { useState } from "react";
import './Addproduct.css'
import Axios from "axios";


export default function Emp() {
    const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [brand, setbrand] = useState("");
  const [catagory, setcatagory] = useState("");
  const [price, setprice] = useState(0);
  const [stocks, setstocks] = useState(0);

  const [url, seturl] = useState("");

  const [productList, setproductList] = useState([]);
  const Emp = () => {
    Axios.post("http://localhost:3001/create", {
      id:id,
      name: name,
      brand:brand,
      catagory:catagory,
      price:price,
      stocks:stocks,
      url:url,
    }).then(() => {
      setproductList([
        ...productList,
        {
            id:id,
            name: name,
            brand:brand,
            catagory:catagory,
            price:price,
            stocks:stocks,
            url:url,
        },
      ]);
    });
  };
  return (
    <>
     <div>
     
     <body>
         <div className="registration-form">
             <form>
                 
                 <div className="form-group">
                     <input type="number" onChange={(event) => {
                 setID(event.target.value);
               }} className="form-control item" id="pid" placeholder="Product ID"/>
                 </div>
                 <div className="form-group">
                     <input type="text" onChange={(event) => {
                 setName(event.target.value);
               }} className="form-control item" id="username" placeholder="Name"/>
                 </div>
                 <div className="form-group">
                     <input type="text" onChange={(event) => {
                 setbrand(event.target.value);
               }} className="form-control item" id="brand" placeholder="Brand"/>
                 </div>
                 <div className="form-group">
                     <input type="text" onChange={(event) => {
                 setcatagory(event.target.value);
               }} className="form-control item" id="catagory" placeholder="Catagory"/>
                 </div>
                 <div className="form-group">
                     <input type="number" onChange={(event) => {
                 setprice(event.target.value);
               }} className="form-control item" id="price" placeholder="Price"/>
                 </div>
                 <div className="form-group">
                     <input type="number" onChange={(event) => {
                 setstocks(event.target.value);
               }} className="form-control item" id="stocks" placeholder="Stocks"/>
                 </div>
                 <div className="form-group">
                     <input type="text" onChange={(event) => {
                 seturl(event.target.value);
               }} className="form-control item" id="URL" placeholder="Image Url"/>
                 </div>
                 <div className="form-group">
                 {/* <button onClick={addEmployee}>Add Employee</button> */}
                     <button onClick={Emp} className="btn btn-block create-account">ADD PRODUCT</button>
                 </div>
             </form>
            
         </div>
         <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
         <script src="assets/js/script.js"></script>
     </body>
     
         </div>
         </>
  )
}
