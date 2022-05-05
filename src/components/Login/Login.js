import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

function Login() {
  const auth = getAuth(app)
  const navigate = useNavigate()


  const provider = new GoogleAuthProvider();
  const loginWithPassword = (event) =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password);
    navigate('/')
  }
  const googleSignIn = event =>{
    event.preventDefault();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      navigate('/')
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  return (
    <div className='w-50 ml-0 mr-0 mx-auto'>
      <h1 className='text-center my-5'>Login</h1>
      <Form onSubmit={loginWithPassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3">
          Don't have an account <Link className='register-now-btn' to='/register'>Register</Link>
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <div className='social-login'>
        
      <button onClick={googleSignIn} type="button" className="login-with-google-btn mx-auto my-3" >
        Sign in with Google
      </button>
      </div>
    </div>
  )
}

export default Login