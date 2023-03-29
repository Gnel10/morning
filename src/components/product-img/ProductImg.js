import  "./product-img.scss"
import ReactPlayer from "react-player"




const ProductImg = () => {
    return(
        <div className="product-img">
            <ReactPlayer url="https://www.youtube.com/watch?v=djssacQugtc"  width="900" height="300" controls={true} className="video"/>
        </div>
        )

    }

        export default ProductImg



        