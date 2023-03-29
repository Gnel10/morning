import "./map.scss"
import map from "../../images/map.webp"

const Map = () => {
    return(
        <div className="map-box">
            <div className="info_window">
                <div className="left-side">
                <h2>Ventura Store</h2>
                <div className="line-1"></div>
                <p>324 E. Main St, Ventura</p>
                <p>CA 93001</p>
                <p>(805) 643-0737</p>
                <p>store@email.com</p>
                </div>
                <div className="right-side">
                    <p>Monday - Thursday, 11:00 to 19:00</p>
                    <p>Friday & Saturday, 10:00 to 19:00</p>
                    <p>Sunday, Closed</p>
                </div>
                <div className="line-2"></div>
                <div className="btn-text">
                    <p>San Francisco Store</p>
                </div>
            </div>
            <img src={map} alt="" />
        </div>
    )
}

    export default Map