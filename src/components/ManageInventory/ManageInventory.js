import { faPen, faPenAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

function ManageInventory() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res=>res.json())
    .then(data => setProducts(data))
  }, [])
  console.log(products)
  return (
    <div>
      <h1 className='text-center'>Manage Inventory</h1>
      <Table responsive="sm">
    <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Supplier</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        products.map(product=> <tr>
          <td>{product.name}</td>
          <td>{product.qty}</td>
          <td>{product.supplier}</td>
          <td><button className='btn btn-primary'><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></button></td>
          <td><button className='btn bn-primary'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
        </tr>)
      }
    </tbody>
  </Table>
    </div>
  )
}

export default ManageInventory;