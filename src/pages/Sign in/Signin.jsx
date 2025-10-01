import React from 'react'
import './Signin.css'
import Modal from '../../components/SignInModal/Modal'
import SignInImage from '../../assets/SignInImage.png'
import Imagetop from '../../assets/Imagetop.png'



function Signin() {
  return (
    <div className='SigninContainer'>
    <img className="SignInImage"src={SignInImage} alt="signinImage"/>
    <img  src={Imagetop} className='Image-Top'/>
      <div className='overlay'>
        <Modal/>
      </div>
     
    </div>
  )
}

export default Signin
