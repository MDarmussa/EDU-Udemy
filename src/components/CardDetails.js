import React from 'react'
import { Button, Card } from 'react-bootstrap'

function CardDetails(props) { //we can use the object as props instead. unction CardDetails({title, description, img, clickMe, children}). instead of writing ex: {props.title}, we write only {title}
     //children: if we want to use it to add somethin with the HTML element in the parent, App.js. for more: watch vid (31: minutes: 14)

     // console.log('im in carddetails', props)
     const handleClick=()=> {
          props.clickMe(props.title)
     }
  return (
    <div>
     <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
          <Card.Title>{props.title} </Card.Title>
          <Card.Text>
               {props.description}
          </Card.Text>
          <Button onClick={handleClick} variant="primary">Go somewhere</Button> //onClick is a function to do something
          </Card.Body>
     </Card>
    </div>
  )
}

export default CardDetails