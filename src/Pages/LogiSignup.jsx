import React from 'react'
import './CSS/LoginSignup.css';
import { useState } from 'react';

const LogiSignup = () => {
const [state, setState] = useState("Sign Up");
const[formData, setFormData] = useState({
  username:"",
  password:"",
  email:""
  
})
const changeHandler = (e)=>
{
  setFormData({...formData, [e.target.name]:e.target.value})

const login = async()=>
{
 console.log("Login function executed",formData)
 let responseData;
  await fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
       Accept: 'application/form-data',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json()).then((data) => responseData=data);

  if (responseData.success){
    localStorage.setItem("auth-token", responseData.token);
    window.location.replace("/");
  }             
  else{
                alert(responseData.errors);
    }
}
const signup = async()=>
  {
    console.log("signup function executed",formData)
    let responseData;
  await fetch('http://localhost:5000/Signup', {
    method: 'POST',
    headers: {
       Accept: 'application/form-data',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json()).then((data) => responseData=data);

  if (responseData.success){
    localStorage.setItem("auth-token", responseData.token);
    window.location.replace("/");
  }             
  else{
                alert(responseData.errors);
    }

  }

  return (
    <div className='LogiSignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up" ? <input value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input type="email" value={formData.email}onChange={changeHandler}  placeholder='Email Address' />
          <input type="password"value={formData.password}onChange={changeHandler} placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}} >Continue</button>
        {state==="Sign Up" ?<p className="loginsignup-login">Allready have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>:  
              <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>
        }
        
        <div className="loginsignup-agree">
          <input type="checkbox" name=''id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>

    </div>
  )
}}

export default LogiSignup