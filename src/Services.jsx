import React from 'react'

function Services() {
  return (
    <div className="container mt-md-5 mt-5 py-3 ">
    <span className="display-5 und text-white ">Our Services</span>

      <div className="row">
    
        <div className="col-md-5">
          <img src="assets/deliveryf.png" className="img-fluid  pt-md-3 mt-5 imgrou ms-md-5"></img>
        </div>
        
        <div className="col-md-7 fw-light fs-2 text-white pt-md-5 mt-4 d-flex justify-content-center ">
          <ul className="list-unstyled">
            <li>
              <i className="fa-solid fa-check me-2 bg-success rounded-pill p-1 "></i>
              Brand Assured Products
            </li>
            <li>
              <i className="fa-solid fa-check me-2 bg-success rounded-pill p-1 mt-2"></i>
              Safe Packaging
            </li>
            <li>
              <i className="fa-solid fa-check me-2 bg-success rounded-pill p-1 mt-2"></i>
              Fast Shipping
            </li>
            <li>
              <i className="fa-solid fa-check me-2 bg-success rounded-pill p-1 mt-2"></i>
              24*7 Online Tracking
            </li>
            <li>
              <i className="fa-solid fa-check me-2 bg-success rounded-pill p-1 mt-2"></i>
              Trusted Delivery Partners
            </li>
            <li>
              <i className="fa-solid fa-check me-2 bg-success rounded-pill p-1 mt-2"></i>
              Deliver Right On-Time
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Services