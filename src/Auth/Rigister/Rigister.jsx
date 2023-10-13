import axios from "axios";
import "./Rigister.css"
import Joi from "joi";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Rigister = () => {

  const navigate = useNavigate();
  const [erorrs, setErorrs] = useState([])
  const [user, setUser] = useState({
    first_name:"",
    last_name:"",
    age:"", 
    email:"",
    
    phoneNumber:"",
    password:"",
    confirm_password:"",
  });

  const validateRegisterForm = ()=>{
    let schema = Joi.object({
      first_name:Joi.string().alphanum().min(3).max(15),
      last_name:Joi.string().alphanum().min(3).max(15),
      age:Joi.number().min(16).max(80), 
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      phoneNumber:Joi.number().required(),
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

  const submitRegisterForm = async (e)=>{
    e.preventDefault();
    let validationResult = validateRegisterForm();
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
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center" >
    {erorrs.map((err,i)=> <div key={i} className="alert bg-danger col-12 col-lg-9 col-xl-7 rounded-2 text-white "> {err.message} </div>)  } 
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: 15} }>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={submitRegisterForm}>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input onChange={getUserData} type="text" id="first_name" className="form-control form-control-lg" />
                    <label  className="form-label" htmlFor="first_name">First Name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input onChange={getUserData} type="text" id="last_name" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="last_name">Last Name</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">
                  <div className="form-outline datepicker w-100">
                    <input onChange={getUserData} type="text" className="form-control form-control-lg" id="age" />
                    <label htmlFor="age" className="form-label">Birthday</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <h6 className="mb-2 pb-1">Gender: </h6>
                  <div className="form-check form-check-inline">
                    <input  className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="female" defaultChecked />
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input  className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" defaultValue= "male" />
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input onChange={getUserData} className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" defaultValue="option3" />
                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input onChange={getUserData} type="email" id="email" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input onChange={getUserData} type="tel" id="phoneNumber" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input onChange={getUserData} type="password" id="password"  className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>
                 
                </div>
                <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                    <input onChange={getUserData} type="password" id="confirm_password"  className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="confirm_password">confirm Password</label>
                  </div>
                 
                </div>
              </div>
              <div className="mt-4 pt-2 text-center submit-btn">
                <input className="btn btn-lg " type="submit" defaultValue="Submit" />
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

export default Rigister