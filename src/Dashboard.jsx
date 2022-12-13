import "./App.css";
import Card from "./Card";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Productstitle from "./Components/Productstitle";
import Testimonials from "./Testimonials";
import Footer from "./Components/Footer";
import Services from "./Services";
import { useLocation } from "react-router-dom";

function Dashboard({cart, data, addToCart, count }) {

  // const location=useLocation();
  // let username=location.state

  return (<>
    
    

      <Navbar count={count}/>

      <Carousel/>

      <Productstitle/>

      {/* Cards */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="row g-5">
              {
                //etha loop pannanum products ah so products.map
                data.map((item, index) => {
                  return (
                    <Card
                      res={item}
                      handleAddToCart={addToCart}
                      cart={cart}
                      index={index}
                    ></Card>
                  );
                })
              }
            </div>
          </div>
        </div>
        </div>

      <Services/>

      <Testimonials/>
    
      <Footer/>
 
  
</>)
}

export default Dashboard;
