import "./footer.scss"
import twitter from "../../images/twitter-brands.svg"
import pinterest from "../../images/pinterest-brands.svg"
import insta from "../../images/instagram-brands.svg"
import visa from "../../images/visa.png"
import master from "../../images/master.png"
import amex from "../../images/amex.png"
import paypal from "../../images/paypal.jpg"
import diners from "../../images/diners.png"
import discover from "../../images/discover.png"

    const Footer = () => {
        return(
                <div className="footer_container">
                    <div className="footer-box">
                        <h3>Browse</h3>
                        <p>All products</p>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Theme</p>
                    </div>
                    <div className="footer-box">
                    <h3>Help</h3>
                       <p>FAQ</p>
                        <p>Terms & conditions</p>
                        <p>Contact us</p>
                    </div>
                    <div className="footer-box">
                    <h3>About</h3>
                        <p>Our story began in 2001 in a small studio in the middle of nowhere. With only one desk and next to no free time, our brand was born. Our passion for unique design and collaboration brought our vision, and products, to life.</p>
                    </div>
                    <div className="footer-box">
                        <h3>Social</h3>
                        <div className="img-box">
                        <a href="https://twitter.com"><img src={twitter} alt="" /></a>
                        <a href="https://www.pinterest.com"><img src={pinterest} alt="" /></a>
                        <a href="https://www.instagram.com"><img src={insta} alt="" /></a>
                        </div>
                    </div>
                        <div className="btn-section">
                        <div className="first">
                            <p>United States  (USD $)  </p> 
                            <a href="#">˅</a>
                            <p></p>
                        </div>
                        <div className="second">
                            <img src={visa} alt="" />
                            <img src={master} alt="" />
                            <img src={amex} alt="" />
                            <img src={paypal} alt="" />
                            <img src={diners} alt="" />
                            <img src={discover} alt="" />
                        </div>
                        <div className="third">
                            <p>Powered by Gnel Sahakyan</p>
                            <p>© 2022, Venue Theme Morning</p>  
                        </div>
                </div>
                </div>
        )
    }

        export default Footer