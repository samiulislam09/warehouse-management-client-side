import React from 'react'
import { Button, Form } from 'react-bootstrap'

function AddItem() {
  return (
    <div>
      <h1 className='text-center my-5'>Add Item</h1>
      <Form className='w-75 mx-auto'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control type="text" placeholder="Enter book name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter short description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="text" placeholder="Enter Quantity" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Supplier</Form.Label>
          <Form.Control type="text" placeholder="Enter supplier name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image Link</Form.Label>
          <Form.Control type="text" placeholder="Enter image link" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
    </div>
  )
}

export default AddItem