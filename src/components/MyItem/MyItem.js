import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init'

function MyItem() {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const email = user.email;
    const url = `https://obscure-mesa-50963.herokuapp.com/myitem?email=${email}`;
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])


    const handleDeleteItem = (id)=>{
        const proceed = window.confirm("Do you want to delete")
        if (proceed){
          console.log('deleting', id)
          const url = `https://obscure-mesa-50963.herokuapp.com/myitem/${id}`
          fetch(url, {
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            const remaining = products.filter(product=>product._id !== id);
            setProducts(remaining)
          })
        }
      }


    const handleUpdateItem = id =>{
        navigate(`/update/${id}`)
      }

  return (
    <div>
      <h1 className='text-center my-5'>My Items</h1>
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
        products.map(product=> <tr key={product._id}>
          <td>{product.name}</td>
          <td>{product.qty}</td>
          <td>{product.supplier}</td>
          <td><button onClick={()=>handleUpdateItem(product._id)} className='btn btn-primary'><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></button></td>
          <td><button onClick={()=> handleDeleteItem(product._id)} className='btn btn-primary'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
        </tr>)
      }
    </tbody>
  </Table>
    </div>
  )
}

export default MyItem