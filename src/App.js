import "./App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { env } from "./Config";

import Dashboard from "./Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Signup from "./Signup";
import ViewProduct from "./ViewProduct";
import Cart from "./Cart";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    LoadData();
  }, []);

  let LoadData = async () => {
    let products = await axios.get(`${env.api}/products`);
    setData(products.data);
  };
  // console.log(data);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (res) => {
    setCount(count + 1);
    setCart([...cart, res]);
    setTotal(total + res.price);
  };

  let removeCart = (res1) => {
    setCount(count - 1);
    let index = cart.findIndex((obj) => {
      return obj._id === res1._id;
    });
    cart.splice(index);
    setCart([...cart]);
    setTotal(total - res1.price);
  };



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
          {/* 
      <Route element={<ProtectedRoutes/>}> */}
          <Route
            path="dashboard"
            element={
              <Dashboard
                count={count}
                data={data}
                cart={cart}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="cart"
            element={
              <Cart
                count={count}
                // increment={increment}
                // decrement={decrement}
                cart={cart}
                total={total}
                setTotal={setTotal}
                removeCart={removeCart}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="product/:id"
            element={
              <ViewProduct count={count} addToCart={addToCart}  />
            }
          />

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
