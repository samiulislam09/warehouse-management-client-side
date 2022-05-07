import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';
import GoogleLogin from '../SocialLogin/GoogleLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || '/'
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(loading){
    return <Loading></Loading>
  }
  // password login
  const passWordLogin = event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    event.target.email.value = '';
    event.target.password.value = '';
  }
  if(user){
    navigate(from)
  }
  
  return (
    <div className='w-50 ml-0 mr-0 mx-auto'>
      <h1 className='text-center my-5'>Login</h1>
      <Form onSubmit={passWordLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3">
          Don't have an account <Link className='register-now-btn' to='/register'>Register</Link>
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <div className='social-login'>
        
      <GoogleLogin></GoogleLogin>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Login