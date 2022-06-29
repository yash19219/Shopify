// import React from "react";
// import './Card.css';

// export default function Card({menuData}) {
//   return (
//     // <div className="container card w-25 h-25 d-inline-block">
//     // <img src="images/pencil1.png" className="card-img-top" alt="..."/>
//     // <div className="card-body">
//     //     <h5 className="card-title">Card title</h5>
//     //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     //     <Link href="/" className="btn btn-primary">Go somewhere</a>
//     // </div>
//     // </div>
//     {menuData.map((curElem) => {
//         const { id, name, category, image, description } = curElem;

//         return (
//         <div className="container mx-auto mt-4">
//   <div className="row">
//     <div className="col-md-4">
//       <div className="card" >
//         <img
//           src="images/pencil1.png"
//           className="card-img-top"
//           alt="..."
//         />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up
//             the bulk of the card's content.
//           </p>
//           <Link href="#" className="btn mr-2">
//             <i className="fas fa-link"></i> Visit Site
//           </a>
//           <Link href="#" className="btn ">
//             <i className="fab fa-github"></i> Github
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//         );
//         }
//     )
// }

//   );
// }

import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ menuData }) => {
  //   console.log(menuData);
  console.log('------INSIDE card----------',menuData);
  return (
    <>
      <section className="main-card--cointainer pt-5 pl-5" id="mainCard">
        {menuData.map((curElem) => {
          const { id, name, brand, category, price, stocks, url,cid } = curElem;
// {console.log('------INSIDE card----------',menuData1);}
          return (
            <>
              <div className="container mx-auto mt-4 allign">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card zoom" >
                      <img 
                        src={url}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {category}
                        </h6>
                        <Link to="#" className="btn mr-2 py-2">
                          <i className="fas fa-link"></i> Price:{price}
                        </Link>
                        <span className="px-4 py-2" >
                        <Link to="/cart" state={{ from: curElem}} className="btn ">
                          <i className="fab fa-github"></i> Add to Cart
                        </Link>
                        </span>
                        <p className="card-text focus-content">
                         {"Amazing product"}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Card;
