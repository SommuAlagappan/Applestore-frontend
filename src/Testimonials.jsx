import React from 'react'

function Testimonials() {
  return (
    <div className="container mt-md-5 mt-3 py-md-5">
        <span className=" display-5 und text-white">Testimonials</span>
        <div className="row mt-5">
          <div className="col-lg-4 d-flex justify-content-center ">
            <div
              className="card rounded bg-black d-flex justify-content-center"
              style={{ width: "18rem" }}
            >
              {" "}
              <div className="card-header mx-auto">
                <img
                  src="assets/testi1.png"
                  className="card-img-top rounded-pill"
                  style={{ width: "100px", height: "100px" }}
                  alt="testimonial1"
                />
              </div>
              <div className="card-body text-center text-white">
                <h5 className="card-title">Aaryan Gourav</h5>
                <span className="mt-2 text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <p className="card-text fst-italic mt-3">
                  The product is brand new.... and happy that I received the
                  product within 48 hours of time, thank you for the on-time
                  delivery!
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center ">
            <div
              className="card rounded bg-black d-flex justify-content-center"
              style={{ width: "18rem" }}
            >
              {" "}
              <div className="card-header mx-auto">
                <img
                  src="assets/testi2.png"
                  className="card-img-top rounded-pill"
                  style={{ width: "100px", height: "100px" }}
                  alt="testimonial1"
                />
              </div>
              <div className="card-body text-center text-white">
                <h5 className="card-title">Shiva Ganesh</h5>
                <span className="mt-2 text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <p className="card-text fst-italic mt-3">
                  This is my first iphone, much excited to get it from Apple
                  store Online, received a sealed product with a safe packaging,
                  thanks!
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center ">
            <div
              className="card rounded bg-black d-flex justify-content-center"
              style={{ width: "18rem" }}
            >
              {" "}
              <div className="card-header mx-auto">
                <img
                  src="assets/testi3.png"
                  className="card-img-top rounded-pill"
                  style={{ width: "100px", height: "100px" }}
                  alt="testimonial1"
                />
              </div>
              <div className="card-body text-center text-white">
                <h5 className="card-title">Robin Sharma</h5>
                <span className="mt-2 text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
                <p className="card-text fst-italic mt-3">
                  Neat packaging, On-Time delivery, thanks Apple store for the
                  fastest delivery!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Testimonials