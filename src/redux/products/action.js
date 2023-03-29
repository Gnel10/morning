import {DECREMENT_COUNT, GET_ITEM, GET_ITEM_INFO, INCREMENT_COUNT} from "./type";
import {getRequest} from "../../api/api";

export const setItemsArray = (payload) => ({type:GET_ITEM , payload})
export const setItemsInfo = (payload) => ({type:GET_ITEM_INFO, payload})
export const setIncrementCount = () => ({type:INCREMENT_COUNT})
export const setDecrementCount = () => ({type:DECREMENT_COUNT})


export const getItems = ()=>{
    return async (dispatch) => {
        const response = await getRequest('https://fakestoreapi.com/products','GET') 

        dispatch(setItemsArray(response))
    }
}
export const getItemsInfo = (id) =>{
    return async (dispatch) => {
        const response = await getRequest(`https://fakestoreapi.com/products/${id}`, 'GET')

        dispatch(setItemsInfo(response))
    }
}

export const incrementCount = () =>{
    return (dispatch) =>{
        dispatch(setIncrementCount())
    }
}
export const decrementCount = () =>{
    return (dispatch) =>{
        dispatch(setDecrementCount())
    }
}