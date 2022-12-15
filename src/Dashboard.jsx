import "./App.css";
import Card from "./Card";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Productstitle from "./Components/Productstitle";
import Testimonials from "./Testimonials";
import Footer from "./Components/Footer";
import Services from "./Services";


function Dashboard({cart, data, addToCart, count, loading }) {

  return (<>
    
    

      <Navbar count={count}/>

      <Carousel/>

      <Productstitle/>
      {/* Cards */}
{
  
  loading ?  
  <div className="text-center mt-5" style={{ height:"18rem" }}>
      <div className="spinner-grow text-light " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  : 
<div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="row g-5">
              {
                //etha loop pannanum products ah so products.map
                data.map((item) => {
                  return (
                    <Card
                      res={item}
                      handleAddToCart={addToCart}
                      cart={cart}
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
      </div>
    }
  
</>)
}

export default Dashboard;
