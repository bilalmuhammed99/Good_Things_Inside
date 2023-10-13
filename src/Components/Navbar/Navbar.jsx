import { Link } from "react-router-dom"
import "./Navbar.css"
import React from 'react'
import { useSelector } from "react-redux"

const Navbar = () => {
    const lenghtOfFavoriteProducts =  useSelector( state => state.cart.length )
  return (
     
    <nav className="navbar navbar-expand-sm navbar-dark  bg-transparent  w-100 ">
              <div className="container">
                <Link className="navbar-brand " to={"/"}>GTI Store </Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/Home"} aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                        </li>
                    
                        <li className="nav-item">
                            <Link className="nav-link" to={"/Contact"}>Contact</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/About"}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/Products"}>Products</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/Cart"}>Cart <div className="badge bg-warning"> {lenghtOfFavoriteProducts} </div> </Link>
                        </li>
                        
                       
                    </ul>
                    <ul className="navbar-nav  mt-2 mt-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to={"/Login"}>Login</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to={"/Rigister"}>Rigister</Link>
                        </li>
                       
                    </ul>
                    
                </div>
          </div>
        </nav>
  )
}

export default Navbar