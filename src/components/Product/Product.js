import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Product(props) {
  const navigate = useNavigate()
  const {name, img, desc, price, qty, supplier, _id} = props.product;
  const navigateToServiceDetail = id =>{
    navigate(`/product/${id}`)
  }
  return (
    <div>
      <Card className="w-75">
        <Card.Img style={{height:'500px'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <Card.Text>
            price: ${price}
          </Card.Text>
          <Card.Text>
            Quantity: {qty}
          </Card.Text>
          <Card.Text>
            Supplier: {supplier}
          </Card.Text>
          <Button onClick={()=> navigateToServiceDetail(_id)} variant="primary">Update</Button>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Product