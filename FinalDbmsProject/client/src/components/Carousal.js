import React from "react";
import './Carousal.css';
export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner h-50">
          <div className="carousel-item active sttyle">
            <img src="https://m.media-amazon.com/images/S/aplus-media/vc/fab58d4e-945a-470d-aa5d-6da765c885ad.__CR0,0,970,300_PT0_SX970_V1___.jpg" className="d-block  w-100 h-100 img-responsive" alt="..."  />
            <div className="carousel-caption d-none d-md-block">
              <h5>BOAT MUSIC</h5>
              <p>
                Great sale coming soon stay tuned.
              </p>
            </div>
          </div>
          <div className="carousel-item sttyle">
            <img src="http://www.blackxperience.com/assets/content/blackattitude/blacktech/oppo-f11-pro-avengers-edition-cover-ndtv-1555327549063.jpg" className="d-block w-100 h-100 img-responsive" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>OPPO</h5>
              <p>
              Great sale coming soon stay tuned.
              </p>
            </div>
          </div>
          <div className="carousel-item sttyle">
            <img src="http://fashionchinaagency.com/wp-content/uploads/2016/07/13-image2.jpg" className="d-block w-100 h-100 img-responsive" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>ADIDAS</h5>
              <p>
              Great sale coming soon stay tuned.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
