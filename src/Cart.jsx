import React from "react";
import CartLoop from "./CartLoop";
import CartSummary from "./CartSummary";
import Navbar from "./Components/Navbar";

function Cart({
  cart,
  addToCart,
  removeCart,
  total,
  count,
  setTotal,
  increment,
  decrement,
 
}) {
  // console.log(cart)
  return (
    <>
      
      <div className="container">
      <Navbar count={count} />
        <div className="row g-5 mt-md-3 d-flex justify-content-center ">
          <div className="col-md-7">
            {cart.map((item, index) => {
              return (
                <CartLoop
                  res1={item}
                  index={index}
                  handleRemoveCart={removeCart}
                  handleAddToCart={addToCart}
                  handleIncrement={increment}
                  handleDecrement={decrement}
                  total={total}
                  setTotal={setTotal}
                  count={count}
                ></CartLoop>
              );
            })}
          </div>

          <div className="col-md-5">
            <CartSummary total={total} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
