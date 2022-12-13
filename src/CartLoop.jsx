import React from "react";
import { useState, useEffect } from "react";

function CartLoop({
  res1,
  index,
  handleRemoveCart,
  total,
  // count,
  // handleIncrement,
  // handleDecrement,
  // setCount,
  setTotal
}) 
{
  const [count, setCount] = useState(1);


  let increment = (res1) => {
    setCount(count + 1);
    setTotal(total + res1.price);
  };

  let decrement = (res1) => {
    setCount(count - 1);
    setTotal(total - res1.price);
  };


  return (
    <>
      <div className="card cardhove mb-3 bg-black ">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={res1.image}
              className="img-fluid rounded-start"
              style={{ height: "200px", width: "200px" }}
              alt="iphone"
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body text-md-start text-center">
              <h5 className="card-title fs-3 text-white">{res1.title}</h5>
              <span className="card-text fw-normal lead text-white">
                Price : ₹
                <span className="lead fw-normal  text-white">
                  {" "}
                  {res1.price}
                </span>
              </span>
              <p className="card-text lead fw-normal text-white">
                Capacity :{" "}
                <span className="lead  fw-normal text-white">
                  {res1.Memory}
                </span>{" "}
              </p>
             
              <button className="btn btn-light btn-sm mb-1"
                  onClick={() => increment(res1)}>
                  <i className="fas fa-plus"></i>
                </button>

              <span className="mx-4 h5 text-white">{count}</span>

              <button disabled={count === 1 ? true : false} className="btn btn-light btn-sm mb-1"
                  onClick={() => decrement(res1)}>
                  <i className="fas fa-minus"></i>
                </button>
                <button type="button" onClick={() => handleRemoveCart(res1)} className="btn btn-danger btn-sm ms-4 ms-md-5 mb-1" data-mdb-toggle="tooltip"
                title="Remove item">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartLoop;
