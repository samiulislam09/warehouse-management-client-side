import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState({});
    useEffect(()=>{
        fetch(`https://obscure-mesa-50963.herokuapp.com/product/${id}`)
        .then(res=>res.json())
        .then(data => setProduct(data))
    }, [])
    console.log(product)

    const deliverItem = () =>{
      setProduct(product => ({...product,qty: product.qty - 1}))
    }

  return (
    <div className='mx-auto'>
      <h1 className='text-center my-2'>Product Details</h1>
      <Card style={{ width: '28rem' }} className='mx-auto my-2'>
        <Card.Img style={{height:'400px'}} variant="top" src={product.img} />
        <Card.Body>
        <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.desc}
          </Card.Text>
          <Card.Text>
            price: ${product.price}
          </Card.Text>
          <Card.Text>
            Quantity: {product.qty>0?product.qty:'stock out'}
          </Card.Text>
          <Card.Text>
            Supplier: {product.supplier}
          </Card.Text>
          <Button onClick={deliverItem} className='w-100' variant="primary">Deliver</Button>
          <input type="text" placeholder='enter stock' className='my-2 w-100' />
          <Button className='w-100' variant="primary">Restock</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductDetails