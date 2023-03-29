import {applyMiddleware, combineReducers, createStore} from "redux";
import itemReducer from "./products/item-reducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    itemState: itemReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store