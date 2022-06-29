import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Navbar({ menuData }) {
  // console.log("jjjkj ",menuData)
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Home"
                  >
                    Home
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/checkout" state={{ from: menuData}}>
                    Checkout
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
                  <Link className="navbar-brand" to="/Home">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-nav-logo/logo.png"
                      alt=""
                      width="55"
                      height="55"
                    />
                  </Link>
                  <Link className="navbar-brand" to="/Home">
                    Shopify
                  </Link>
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
                </div>
                <div className="col-md-10">
                  <div className="d-flex form-inputs rounded-circle">
                    <form className="d-flex col-md-10">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search any product..."
                        aria-label="Search"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                    {/* <input
                    className="form-control"
                    type="text"
                    placeholder="Search any product..."
                  />{" "}
                  <i className="bx bx-search"></i>{" "} */}
                    <li className="px-4 nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Catagories
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link className="dropdown-item" to="/productss">
                            Pencil
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/Phone">
                            Phone
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/Laptop">
                            Laptop
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/Pen">
                            Pen
                          </Link>
                        </li>
                        {/* <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Item 5</Link></li>
            <li><Link className="dropdown-item" to="#">Item 6</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Item 7</Link></li>
            <li><Link className="dropdown-item" to="#">Item 8</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
                      </ul>
                    </li>

                    {/* <li>

        <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
    <input className="form-check-input" onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
</div>
        </li> */}
                    {/* <button className="btn px-4 btn-primary" type="button">Button</button> */}
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
