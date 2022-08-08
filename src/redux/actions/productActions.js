import { Actiontypes } from "../contants/action-types";

export const setProducts=(products)=>{
    return{
        type:Actiontypes.SET_PRODUCTS,
        payload:products,
    }
}
export const selectedProducts=(products)=>{
    return{
        type:Actiontypes.SELECTED_PRODUCT,
        payload:products,
    }
}