import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {decrementCount, getItemsInfo, incrementCount} from "../../redux/products/action";


const ItemInfoPage = () =>{
    const dispatch = useDispatch()
    const params = useParams()
    const itemState = useSelector(state => state.itemState)
    const {itemInfo, count} = itemState
    const {title,price, image} = itemInfo
    const sum = count * price
    const incCount = () =>{
        dispatch(incrementCount())
    }
    const decCount = () =>{
        if(count > 1) {
            dispatch(decrementCount())
        }
    }
    useEffect(() =>{
        dispatch(getItemsInfo(params.id))
    },[params.id])
    return(
        <div className='single_items'>
            <p>{title}</p>
            <p>{price}$</p>
            <img src={image} alt='dress photo'/>
                <div className='inc_dec'>
                     <button onClick={decCount}>-</button>
                     <p>{count}</p>
                     <button onClick={incCount}>+</button>
                </div>
        </div>
    )
}
export default ItemInfoPage