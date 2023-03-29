import iron_car from "../../images/iron_car.webp"
import white_logo from "../../images/white_logo.webp"

const BtmBackground = () => {
    return(
        <div className="btm-container">
            <div className="img-box">
                <img src={white_logo} alt="" className="white_logo"/>
            <div className="title-box">
                <p>'Little do ye know your own blessedness; for to travel hopefully is a better thing than to arrive, and the true success is to labour'</p>
                <h3>Robert Louis Stevenson</h3>
                <a href="">OUR PHILOSOPHY ᐳ</a>
            </div>
          
                <span></span>    
                <img src={iron_car} alt=""  className="back-img"/>
            </div>
        </div>
    )

}
    export default BtmBackground