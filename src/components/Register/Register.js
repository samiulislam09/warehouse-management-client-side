import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import GoogleLogin from '../SocialLogin/GoogleLogin';

function Register() {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const registerWithPassowrd = event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    event.target.email.value = '';
    event.target.password.value = '';
    
  }
  return (
    <div className='w-50 ml-0 mr-0 mx-auto'>
      <h1 className='text-center my-5'>Register</h1>
      <Form onSubmit={registerWithPassowrd}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          Already have an account <Link className='register-now-btn' to='/login'>Login</Link>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <div className='social-login'>
        
      <GoogleLogin></GoogleLogin>
      </div>
    </div>
  )
}

export default Register