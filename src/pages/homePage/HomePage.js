import background1 from "../../images/background1.jpg"
import "../homePage/HomePage.scss"
import Slider from "../../components/slider/Slider"
import BtmBackground from "../../components/btm-background/Btm-background"
import ProductImg from "../../components/product-img/ProductImg"
import Map from "../../components/map/Map"
import Footer from "../../components/footer/Footer"

const HomePage = () => {
 
    return(
   
        <div className="back-img">
        <div className="img-box">
            <img src={background1} alt="" />
        </div>
          <div className="title-text"> 
            <h1>Less but better</h1>
            <h3>Less but better is one of our guiding principles. Focus on <br/> the most important elements of each garment and let go <br/> of everything superfluous.</h3>
            <button>SHOP NOW ᐳ</button>
          </div>
          <div className="container">
           <Slider/>
             <BtmBackground/>
              <ProductImg/>
              <Map/>
              <Footer/>
             </div>
        </div>
        
 
          
    )

}

    export default HomePage