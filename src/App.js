import "./App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { env } from "./Config";
import { ToastContainer } from "react-toastify";

import Dashboard from "./Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Signup from "./Signup";
import ViewProduct from "./ViewProduct";
import Cart from "./Cart";
import Swal from 'sweetalert2';

function App() {

    //Alert function;
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      color: '#FFFFFF',
      background:"#161616",
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })


  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    LoadData();
  }, []);

  let LoadData = async () => {
  try {
    setLoading(true)
    let products = await axios.get(`${env.api}/products`,  {
      headers: {
        Authorization: window.localStorage.getItem("app-token"),
      },
    });
    setData(products.data);
    setLoading(false)
  } catch (error) {
    console.log(error)
  }
  };
  // console.log(data);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (res) => {
    setCount(count + 1);
    Toast.fire({ icon: 'success', title: 'Item added to the cart' })
    setCart([...cart, res]);
    setTotal(total + res.price);
  };

  let removeCart = (res1) => {
    setCount(count - 1);
    Toast.fire({ icon: 'error', title: 'Item removed from the cart' })
    let index = cart.findIndex((obj) => {
      return obj._id === res1._id;
    });
    cart.splice(index,1);
    setCart([...cart]);
    setTotal(total - res1.price);
  };



  return (
    <>   
      <BrowserRouter>
      <Routes>
  
       
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
          
      {/* <Route element={<ProtectedRoutes/>}> */}
          <Route
            path="dashboard" element={ <Dashboard
                count={count}
                data={data}
                cart={cart}
                addToCart={addToCart}
                loading={loading}
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
        <ToastContainer/>
      </BrowserRouter>
     
    </>
  );
}
export default App;
