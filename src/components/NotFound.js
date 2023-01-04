import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { Variant } from '@testing-library/react'


function NotFound(props) {
  return (
     <div>
     <Alert variant={props.color}>
     {props.message}
     <Button className="btn btn-danger"> Close</Button>
      </Alert>
     </div>
    
  )
}

export default NotFound