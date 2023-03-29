import "./AllProducts.scss"
import Items from "../../components/items/items";
import Filter from "../../components/filter/filter";
import Footer from "../../components/footer/Footer";


const AllProducts = () => {

    return(
        <div className='container'>
        <div className='image_wrap'>
            <div className='image_block'>
                <div className='photo'>
                    <img alt='Man on surf' src={'https://cdn.shopify.com/s/files/1/2090/4191/collections/Fall16_05_1400x_35f79ad1-a25e-4ae5-822f-b945e861d279_1950x.jpg?v=1637331231'}/>
                </div>
            </div>
        </div>
        <div className='store_info'>
            <div className='store_info_top'>
                <h2>
                    The Store
                </h2>
            </div>
            <div className='store_info_bottom'>
                <h3>
                    Choose well and buy less. We believe in owning fewer,
                    quality things and making them last a long time. That’s
                    why if any of our product ever breaks down, you can send
                    it back to us and we’ll repair it.
                </h3>
            </div>
        </div>
        <div className='items_inner'>
            <Filter/>
            <Items/>
        </div>
        <Footer/>
    </div>
    )
}

    export default AllProducts