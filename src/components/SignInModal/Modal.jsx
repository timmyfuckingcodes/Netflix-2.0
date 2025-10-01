import React, { useState,useContext } from 'react'
import './Modal.css'
import { useRef } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from "react-router-dom";

function Backdrop() {
  <div className='overlay'/>
}
function Modal() {
  const Navigate = useNavigate();
  const authCtx = useContext(AuthContext);
const [isLogin,setIsLogin] = useState(false);
const [LoadingState,setIsLoading] = useState(false);


const handleLogin= () =>{
  setIsLogin((prevState)=> !prevState)
}

const EmailRef = useRef();
const passwordRef = useRef();

const handleSubmit=(e)=> {
  e.preventDefault();
const Enteredemail = EmailRef.current.value
const Enteredpassword = passwordRef.current.value
//ADD VALIDATION THEN OPTIONAL BACKEND
if (isLogin) {
  setIsLoading(true);
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBUdkqwXmcs8WpS_IovVBeuCPfpdwr2EDU',{
    method: 'POST',
    body: JSON.stringify({
      email	:Enteredemail,
    password: Enteredpassword,
    returnSecureToken:true
    }),
    headers:{
      'Content-Type':'application/json'
    }
   
  }) .then(res =>{
    if (res.ok) {
      return res.json().then((data)=>{
      authCtx.login(data.idToken);
      Navigate("/homepage"); //
      console.log(data);
      

      })
    } else{
     return res.json().then((data)=>{
      const errMessage = data.error.message;
      alert(errMessage);
     })
    }
  })

}else{
  setIsLoading(true);
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBUdkqwXmcs8WpS_IovVBeuCPfpdwr2EDU',{
    method: 'POST',
    body: JSON.stringify({
      email	:Enteredemail,
    password: Enteredpassword,
    returnSecureToken:true
    }),
    headers:{
      'Content-Type':'application/json'
    }
   
  }) .then(res =>{
    if (res.ok) {
      
    } else{
     return res.json().then((data)=>{
      const errMessage = data.error.message;
      alert(errMessage);
     })
    }
  })
}

}
  return (
    <>
     <div className='SigninHeaderTitle'>
      <h1 className='SigninHelement'>Unlock A World of Endless Entertainment</h1>
      <p className='SigninPelement'>Login to stream and enjoy</p>
      </div> 
   <div className="darkBG"  />
    <div className= "centered">
      <div className="modal">
        <div className="modalHeader">
           <h5 className="heading">{isLogin ? 'Sign In' : "Sign Up"}</h5>
        </div>
     <form onSubmit={handleSubmit}>
        <div className='inputHeader' >
            <label htmlFor='Email'>
           <input type='email' name='email' className='closeBtn' placeholder='Email'ref={EmailRef}/>    
            </label>
            <label  htmlFor='Password'>
          <input type='password' name='password' className='closeBtn' placeholder='Password'ref={passwordRef}/>  
            </label>
        </div>
        <div className='inputHeader'>
          <div className='header-items'>
            <div className='checkbox'>
            <input type='checkbox'/>
          <p className='remember'> Remember me</p>
            </div>
          <p className='forgot-password'>{isLogin ? "Forgot password" : ""}</p>
          </div>
           <button className='deleteBtn' type='submit'>{isLogin ? "Submit" : "Create New Account"}</button>
            <p className='Sign-uptext' onClick={handleLogin}>{isLogin ? "New to playcine: Sign-up" : ""}  </p>
       
            </div>
            </form>
        </div>
    </div>
  </>
  )
}

export default Modal
