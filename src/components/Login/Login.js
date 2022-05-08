import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.init';
import GoogleLogin from '../SocialLogin/GoogleLogin';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  let from = location.state?.from?.pathname || '/'
  const [
    signInWithEmailAndPassword,
    user,
    error,
  ] = useSignInWithEmailAndPassword(auth);

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
  
  const setEmailState = e=>{
    const email = e.target.value;
    setEmail(email)
  }
  const sendPasswordReset = ()=>{
    console.log(email)
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      toast('email sent')
    })
  }
  return (
    <div className='w-50 ml-0 mr-0 mx-auto'>
      <h1 className='text-center my-5'>Login</h1>
      <Form onSubmit={passWordLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={setEmailState} type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        {
          error?<p className='text-danger'>Wrong username or password</p>:""
        }
        <Form.Group className="mb-3">
          Don't have an account <Link className='register-now-btn' to='/register'>Register</Link>
        </Form.Group>
        <Form.Group>
          Forget password <Button onClick={sendPasswordReset} variant="link">reset</Button>
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