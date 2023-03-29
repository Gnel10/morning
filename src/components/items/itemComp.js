import {useNavigate} from "react-router-dom";

const ItemComp = (props) =>{
    const {title, price, image, id} = props
    const navigate = useNavigate()
    const getItemPage = (id) =>{
        navigate(`/items/${id}`)
    }
    return(
        <div className='items' onClick={()=>getItemPage(id)} >
            <div className='item_wrap'>
                <img className='item_img' alt='itemPhoto' src={image}/>
            </div>
            <p>
                {title}
            </p>
            <p>
                {price}$
            </p>
            <button>SELECT OPTIONS</button>
        </div>
    )
}
export default ItemComp