import React from "react";
import { Link } from "react-router-dom";

function Card({ res, handleAddToCart, cart ,index }) {
  return (
    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
      <div className="card bg-black text-center cards" style={{ width: "18rem" }}>
        <img src={res.image} className="card-img-top" alt="photos" />
        <div className="card-body ">
          <h5 className="card-title text-white">{res.title}</h5>
          <p className="card-text text-white">₹ {res.price}</p>
          <Link
            to={`/product/${res._id}`} 
            className="btn btn-outline-light btn-sm me-3"
          >
            <i class="fa-solid fa-eye me-1"></i>View Product
          </Link>
          <button
            disabled={cart.some((obj) => obj._id === res._id)}
            onClick={() => {handleAddToCart(res, index)}}
            className="btn btn-outline-light btn-sm me-1"
          >
            <i className="fa-solid fa-cart-shopping me-1"></i>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
