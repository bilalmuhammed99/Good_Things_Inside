import axios from "axios";
import "./Login.css"
import Joi from "joi";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();
  const [erorrs, setErorrs] = useState([])
  const [user, setUser] = useState({
  email:"",
  password:"",
  });

  const validateLoginForm = ()=>{
    let schema = Joi.object({
      age:Joi.number().min(16).max(80), 
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password:Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        confirm_password:Joi.ref('password'),
    })
    return schema.validate(user ,{abortEarly:false});
  }

  const getUserData= (e)=>
  { 
    const myUser = {...user};
    myUser[e.target.id] = e.target.value ;
    setUser(myUser);
    // console.log();
  }

  const submitLoginForm = async (e)=>{
    e.preventDefault();
    let validationResult = validateLoginForm();
    if (validationResult.error) {
       setErorrs(validationResult.error.details);
        console.log(erorrs);
    }else{
      alert("Submited");
      navigate("/login")
    }

  }

  return (
    <section className="h-100 gradient-custom">
  <div className="container py-5 vh-100">
    <div className="row justify-content-center align-items-center" >
    {erorrs.map((err,i)=> <div key={i} className="alert bg-danger col-12 col-lg-9 col-xl-7 rounded-2 text-white "> {err.message} </div>)  } 
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: 15} }>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
            <form onSubmit={submitLoginForm}>
            
              <div className="row">
                <div className="col-md-12 mb-4 pb-2">
                  <div className="form-outline">
                    <input onChange={getUserData} type="email" id="email" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="email">Email</label>
                  </div>
                </div>
               
                <div className="col-md-12 mb-4 pb-2">
                  <div className="form-outline">
                    <input onChange={getUserData} type="password" id="password"  className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>
                 
                </div>
                
              </div>
              <div className="mt-4 pt-2 text-center ">
                <input className="btn btn-primary btn-lg " type="submit" defaultValue="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Login