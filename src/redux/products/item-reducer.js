import {DECREMENT_COUNT, GET_ITEM, GET_ITEM_INFO, INCREMENT_COUNT} from "./type";

const initialState = {
    items:[],
    itemInfo:{},
    count:1,
}

const itemReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ITEM:
            return{
                ...state,
                items:[...state.items , ...action.payload]
            }
        case GET_ITEM_INFO:
            return{
                ...state, itemInfo: action.payload
            }
        case INCREMENT_COUNT:
            return{
                ...state,
                count:state.count + 1
            }
        case DECREMENT_COUNT:
            return{
                ...state,
                count:state.count - 1
            }
        default: return state
    }
}
export default itemReducer

