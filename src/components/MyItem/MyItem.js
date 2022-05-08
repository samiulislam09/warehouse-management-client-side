import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase.init'

function MyItem() {
    const [user] = useAuthState(auth);
    const email = user.email;
    const url = `http://localhost:5000/myproduct?email=${email}`;
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
  return (
    <div>MyItem {products.length}</div>
  )
}

export default MyItem