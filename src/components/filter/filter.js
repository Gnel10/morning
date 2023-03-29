import "./filter.scss"

const Filter = () =>{
    return(
        <div className='filter'>
            <h2>Price</h2>
            <input type="text" placeholder=" $  0"  className="input_text"/> - <input type="text" placeholder=" $  650" className="input_text" />
            <div className="line"></div>
             <div className="second">
                <h2>Availability</h2>
                <input type="checkbox" className="checkbox" /> <p>In stock</p>
                <input type="checkbox"  className="checkbox"/> <p>Out of stock</p>
             </div>
             <div className="line"></div>
             <div className="third">
                <h2>Product type</h2>
                <input type="checkbox" className="checkbox" /> <p>Everyday carry</p>
                <input type="checkbox" className="checkbox" /> <p>Headwear</p>
                <input type="checkbox" className="checkbox" /> <p>Outerwear</p>
                <input type="checkbox" className="checkbox" /> <p>Packs & Luggage</p>
                <input type="checkbox" className="checkbox" /> <p>Patches & Pins</p>
                <input type="checkbox" className="checkbox" /> <p>Shorts</p>
                <input type="checkbox" className="checkbox" /> <p> Sweaters</p>
             </div>
        </div>
    )
}
export default Filter
