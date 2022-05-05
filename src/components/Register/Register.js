import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase.init';

function Register() {
  const auth = getAuth(app)
  const registerWithPassowrd = event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

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
        
      <button type="button" className="login-with-google-btn mx-auto my-3" >
        Sign in with Google
      </button>
      </div>
    </div>
  )
}

export default Register