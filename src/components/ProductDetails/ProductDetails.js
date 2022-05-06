import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`)
        .then(res=>res.json())
        .then(data => setProduct(data))
    }, [])
    console.log(product)
  return (
    <div>ProductDetails {id}</div>
  )
}

export default ProductDetails