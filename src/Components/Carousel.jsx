import React from 'react'

function Carousel() {
  return (
    <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/carousel10.png"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/carousel20.png"
              className="d-block w-100 img-fluid "
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/carousel9.png"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/carousel19.png"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/carousel16.png"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/carousel12.png"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/carousel17.png"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/carousel21.png"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/carousel18.png"
              className="d-block w-100 img-fluid"
              alt="picture"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Carousel