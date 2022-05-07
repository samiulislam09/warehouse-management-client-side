import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';

function AddItem() {
  const addItemHandler = (event)=>{
    event.preventDefault();
    const name = event.target.bookname.value;
    const desc = event.target.desc.value;
    const price = event.target.price.value;
    const qty = event.target.qty.value;
    const supplier = event.target.supplier.value;
    const img = event.target.img.value;
    const data = {name, desc, price, qty, supplier, img}
    toast('item added')
    const url = `https://obscure-mesa-50963.herokuapp.com/product`;
    fetch(url, {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result =>{
      console.log(result)
    })
  }
  return (
    <div>
      <h1 className='text-center my-5'>Add Item</h1>
      <Form onSubmit={addItemHandler} className='w-75 mx-auto'>
        <Form.Group className="mb-3">
          <Form.Label>Book Name</Form.Label>
          <Form.Control name='bookname' type="text" placeholder="Enter book name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name='desc' type="text" placeholder="Enter short description" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Price</Form.Label>
          <Form.Control name='price' type="text" placeholder="Price" required />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Quantity</Form.Label>
          <Form.Control name='qty' type="text" placeholder="Enter Quantity" required />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Supplier</Form.Label>
          <Form.Control name='supplier' type="text" placeholder="Enter supplier name" required />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Image Link</Form.Label>
          <Form.Control name='img' type="text" placeholder="Enter image link" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Item
        </Button>
    </Form>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default AddItem