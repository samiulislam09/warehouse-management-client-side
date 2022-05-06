import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './GoogleLogin.css'

function GoogleLogin() {
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || '/'
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const googleSignIn = (event) =>{
        signInWithGoogle()
        
      }
    if(user){
      navigate(from)
    }
  return (
    <div>
        <button onClick={googleSignIn} type="button" className="login-with-google-btn mx-auto my-3" >
        Sign in with Google
      </button>
    </div>
  )
}

export default GoogleLogin