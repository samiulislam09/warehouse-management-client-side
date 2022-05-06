import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Product(props) {
  const {name, img, desc, price, qty, supplier} = props.product;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={img} />
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
          <Button variant="primary">Update</Button>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Product