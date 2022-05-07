import React, { useEffect, useState } from 'react'
import { CardGroup } from 'react-bootstrap';
import Product from '../Product/Product'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res => res.json())
    .then(data => setProducts(data.slice(0, 6)))
  }, [])
  return (
    <div>
      <h2 className='products-title'>Available Products</h2>
      <CardGroup className='card-container'>
        {
          products.map(product => <Product key={product._id} product={product}></Product>)
        }
      </CardGroup>
    </div>
  )
}

export default Products