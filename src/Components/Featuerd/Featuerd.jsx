import React from 'react'
import './Featuerd.css'
import ProductCard from '../ProductCard/ProductCard';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/Slices/CartSlice';
const Featuerd = () => {
    const state = useSelector( state => state.products) ;
    const cartState = useSelector( state => state.cart) ;
    const dispatch = useDispatch();
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 0.5
        }
      };
   
      
    return (
        
        <div className="conrainer p-4 m-5 ">
        <div className="row">
            <div><h1>Featuerd</h1>
        <div class="line-dec"></div> </div>
        
        <Carousel responsive={responsive} centerMode={true} arrows={true}>
        {state.map((product , i ) => 
           
           <div key={product.id} className="card mx-1 my-1 p-4 " style={{width: '18rem',}}>
           <img src={product.image} style={{height:300}} className="card-img-top" alt="..." />
           <div className="card-body">
           <h5 className="card-title">{product.title}</h5>
           <h6 className="card-title">{product.price}</h6>
           <button onClick={()=>{dispatch(addToCart(product))}} className="btn text-light">Add to cart </button>
           
          </div> 
          </div>
           )}
            </Carousel>
           </div>
           </div>
           
           
            
    )
}

export default Featuerd