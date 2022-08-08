import {combineReducers} from 'redux'
import { productReducer, selectedProductReducer } from './productReducer'
const reducers=combineReducers({
    allProduct:productReducer,
    product:selectedProductReducer,
})
export default reducers