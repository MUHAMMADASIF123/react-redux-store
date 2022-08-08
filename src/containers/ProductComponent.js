import React from 'react'
import { useSelector } from 'react-redux'
const  ProductComponent=()=> {
    const products=useSelector((state)=>state.allPoducts.products)
    const [id,title]=products[0]
  return (
    <div>{title}</div>
  )
}

export default ProductComponent