import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Error404() {
  return (
     <div>
          <h1>Page Not Found - Error404</h1>
          <Link to="/about"><Button>Go to About Page</Button></Link>
     </div>
  )
}

export default Error404