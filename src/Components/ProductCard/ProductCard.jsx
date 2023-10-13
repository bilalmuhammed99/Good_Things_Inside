import React, { useEffect } from 'react'
import "./ProductCard.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Store/Slices/ProductsSlice';
import { addToCart, removeItemFromCart } from '../../Store/Slices/CartSlice';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

const ProductCard = () => {

  const state = useSelector( state => state.products) ;
  const cartState = useSelector( state => state.cart) ;
  const dispatch = useDispatch();

  
  
  return (
        <> 
          
          {state.map((product , i ) => 
          <div key={product.id} className="card col-md-3 col-sm-4 my-3 col-xs-12 p-4">
          <Link to={`/Details/${product.id}`} >
          <img src={product.image} style={{height:300, width:300 } }  className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h6 className="card-title">{product.price} $</h6>
           </div> 
           </Link>
          <button onClick={()=>{dispatch(addToCart(product))}} className="btn text-light">Add to cart </button>
        
        
         </div>
        
          )}
        
        </>
 
  )
}

export default ProductCard