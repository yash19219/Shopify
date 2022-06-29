import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import {useState} from "react";
import Axios from 'axios'
import {useNavigate} from "react-router-dom"

export default function EmpNav({ menuData }) {
  // console.log("jjjkj ",menuData)
  let navigate=useNavigate();

  const showDetails=()=>{
    Axios.post("http://localhost:3001/employeeDetails").then((response)=>{
      if(response.data.length==0){
        // console.log('eroooooorrr')
      }
      else{
        navigate("/employeeDetails",{state:{empDetail:response.data},replace:false})
      }
    })
  }
  return (
    
    <div>
      <nav className="fixed-top">
        <nav className="navbar navbar-expand-sm py-0 navbar-dark bg-dark">
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to="#">Navbar</Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <Link className="nav-link" to="DashBoard">
                    DashBoard
                  </Link>
                </li>
                
                
                <li className="nav-item">
                  <Link className="nav-link " to="/Employee">
                    Employee
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <header className="section-header"> */}

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <section className="header-main border-bottom bg-light">
            <div className="container-fluid">
              <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
                <div className="col-md-2">
                 
                  {/* <button
      //   className="navbar-toggler"
      //   type="button"
      //   data-bs-toggle="collapse"
      //   data-bs-target="#navbarSupportedContent"
      //   aria-controls="navbarSupportedContent"
      //   aria-expanded="false"
      //   aria-label="Toggle navigation"
      / >
   *
        <span className="navbar-toggler-icon"></span>
      </button>
    */}
               

                    {/* <li>

        <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
    <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
</div>
        </li> */}
                    {/* <button className="btn px-4 btn-primary" type="button">Button</button> */}
                    <div className="col-md-4">
                  <div className="d-flex form-inputs rounded-circle col-md-4">
                    
                    <button onClick={showDetails} className="btn btn-block create-account" id="myHeader">Employees Information</button>
      </div>
      </div>
                 </div>
              </div>
            </div>
          </section>
        </ul>
      </nav>
    </div>
  );
}
