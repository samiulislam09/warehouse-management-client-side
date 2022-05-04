import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Product(props) {
  const {name, img, desc, price} = props.product;
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
          <Button variant="primary">book</Button>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Product