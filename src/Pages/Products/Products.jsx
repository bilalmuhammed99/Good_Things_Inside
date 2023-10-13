import { useDispatch, useSelector } from "react-redux"
import ProductCard from "../../Components/ProductCard/ProductCard"
import "./Products.css"
import React, { useEffect } from 'react' 
import { decrement, fetchProducts, increament } from "../../Store/Slices/ProductsSlice"
import Footer from "../../Components/Footer/Footer"

const Products = () => {
  

  return (<>  
    
    <div className="conrainer">
        <div className="row mx-5">
            <h1 className="text-center">BROWSE OUR PRODUCTS </h1>
            <ProductCard/> 
            <Footer/>
           
        </div>
    </div>
    </>

  )
}

export default Products