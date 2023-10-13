import { Link } from "react-router-dom"
import "./Home.css"
import React from 'react'
import HeroSection from "../../Components/HeroSection/HeroSection"
import Featuerd from "../../Components/Featuerd/Featuerd"
import Footer from "../../Components/Footer/Footer"

const Home = () => {
    return (
        <div >
            <HeroSection/>
            <Featuerd/>
            <Footer/>
        </div>
    )
}

export default Home