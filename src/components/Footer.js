import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
     <h1>Footer</h1>
     <Link to="/"><Button>Go Home</Button></Link>
     
    </div>
  )
}

export default Footer