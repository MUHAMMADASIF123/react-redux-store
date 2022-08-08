import axios from "axios";
import '../style.css'
import {Link} from 'react-router-dom'
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
// import ProductComponent from './ProductComponent';
// url='https://fakestoreapi.com/products'
const Productlisting = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProduct.products);
  // console.log(product)
  const [id, title] = products;
  const getData = async (res, err) => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const renderList = products.map((product) => {
    const { id, title, image, price, category,description } = product;
    return (
      <div className="container d-flex " >
      <div className="row ">
        <div className="" key={id} >
          <Link to={`/product/${id}`}>
          <div className="card">
            <img src={image} className="card-img-top" alt="..." style={{width:400,height:400}}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h5 className="card-title">${price}</h5>
              {/* <h5 className="card-title">{description}</h5> */}
              <h5 className="card-title">{category}</h5>
            </div>
            </div>
            </Link>
          </div>
        </div>
       </div>
    );
  });
  return <>{renderList}</>;
};

export default Productlisting;
