import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { env } from "./Config";
import Navbar from './Components/Navbar';


function ViewProduct ({count}) {


  const params = useParams();
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadProduct();
  }, []);

  let loadProduct = async () => {
    
    try {
      setLoading(true)
      let product = await axios.get(`${env.api}/product/${params.id}`,  {
        headers: {
          Authorization: window.localStorage.getItem("app-token"),
        },
      });
      console.log(product.data)
      setProductData(product.data);
      setLoading(false)
    } catch (error) {
      console.log(error)
    }

  };

  return (<>
<Navbar count={count}/>
{
  loading ? <div className="text-center mt-5" style={{ height:"18rem" }}>
  <div className="spinner-grow text-light " role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div> : 
<div className="container mt-5">
  <div className="row">
  <div className="card bg-black ">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={productData.image} className="img-fluid rounded-start" alt="..."/>
    </div>


    <div className="col-md-8 mb-5">
      <div className="card-body ">
        <p className="card-title display-4 fw-normal text-white">{productData.title}</p>
        <p className="card-title lead fw-normal fs-2 text-white">Price : ₹ {productData.price}</p>
        <p className="card-text lead fw-normal text-white">Capacity : <span className="lead fst-italic text-white">{productData.Memory}</span></p>
        <p className="card-text lead fw-normal text-white ">Display : <span className="lead fst-italic text-white">{productData.Display}</span></p>
        <p className="card-text lead fw-normal text-white">Camera : <span className="lead fst-italic text-white">{productData.Camera}</span></p>
        <p className="card-text lead fw-normal text-white">Processor : <span className="lead fst-italic text-white">{productData.Processor}</span></p>
        <p className="card-text lead fw-normal text-white">Battery : <span className="lead fst-italic text-white">{productData.Battery}</span></p>
        <p className="card-text lead fw-normal text-white">Security(Lock) : <span className="lead fst-italic text-white">{productData.Security}</span></p>
      </div>
      {/* <button
            // disabled={cart.some((obj) => obj._id === res._id)}
            // onClick={() => addToCart(res)}
            className="btn btn-outline-light btn-sm ms-3"
          >
            <i className="fa-solid fa-cart-shopping me-1"></i>Add to Cart
          </button> */}
    </div>
  </div>
</div>
  </div>
</div>
}




    










  </>);
}

export default ViewProduct;
