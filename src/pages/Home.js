import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="signin">Click to view our Signin</Link>
      <Link to="signup">Click to view our Signup</Link>
    </div>
  )
}

export default Home
