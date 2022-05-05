import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='w-50 ml-0 mr-0 mx-auto'>
      <h1 className='text-center my-5'>Register</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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