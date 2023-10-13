import Divider from "../../Components/Divider/Divider"
import "./Details.css"
import img1 from "../../assets/images/product-05.jpg"
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import Footer from "../../Components/Footer/Footer"
import { Alert } from "bootstrap"

 

const Details = () => {
  const product = useParams();
  const allProducts = useSelector( state => state.products) ;
  let singlProduct = allProducts.find( (singlProduct  ) => singlProduct.id == product.id);
  // const dispatch = useDispatch();
  
      
  
  return (
    <> 
  
    <div className="container  my-2  ">
    
        <Divider/>
      <div className="row "> 
      <div className="image-wrapper col-4 my-auto mx-auto">
        <img src={singlProduct.image}  style={{width:"50%"}}  className="mx-auto"  alt="aa" />
      </div>
      <div className="detilas-wrapper  col-8">
        <h3>{singlProduct.title}</h3>
        <h4 className="text-success">{singlProduct.price} $</h4>
        <p>{singlProduct.description}</p>
        <p>{singlProduct.rating.count} Left on Stock</p>
       <form action method="get" className="d-flex justify-content-around">
  <label htmlFor="quantity">Quantity:</label>
    <input name="quantity" type="quantity" className="quantity-text" id="quantity" onfocus="if(this.value == '1') { this.value = ''; }" onblur="if(this.value == '') { this.value = '1';}" defaultValue={1} />
   <input type="submit" className="btn text-light" defaultValue="Order Now!" />
   
    </form>
    
        
      </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Details