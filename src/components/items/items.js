import React, {useEffect} from 'react';
import ItemComp from "./itemComp";
import {getItems} from "../../redux/products/action";
import {useDispatch, useSelector} from "react-redux";


const Items = () => {

    const dispatch = useDispatch()
    const itemState = useSelector(state => state.itemState)
    const {items} = itemState
    useEffect(() =>{
        dispatch(getItems())
    },[])

    return(
        <section className='item_section'>
            {
                items?.map(items =>{
                return(<ItemComp {...items}  key={items.id}/>)
            })}
        </section>
    )  
}
export default Items