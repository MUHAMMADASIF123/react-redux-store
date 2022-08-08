import React,{useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useDispatch} from "react-redux";
import { useSelector } from 'react-redux';
import { selectedProducts } from '../redux/actions/productActions';


const ProductDetails=() =>{
  const {productid}=useParams();
  console.log(productid);
  
  const dispatch=useDispatch();
  const product = useSelector((state)=>state.product)
  const {title,description,image,price, category}=product;

  const getSingleProduct= async()=>{
await axios.get(`https://fakestoreapi.com/products/${productid}`).then(res=>{
  console.log(res.data)
  dispatch(selectedProducts(res.data));
}).catch(err=>{
  console.log(err)
})
  }
  useEffect(()=>{
    if(productid && productid!=='') getSingleProduct();

  },[productid])
  return (
    <div className='container'>
      <div class="card"  style={{width:500, justifyContent:'center', margin:"auto",height:500}}>
  <img class="" src={image} alt="Card image cap" style={{width:200}} />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}.</p>
    <p class="card-text">${price}</p>
    <p class="card-text">{category}</p>

    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
      </div>
  )
}

export default ProductDetails