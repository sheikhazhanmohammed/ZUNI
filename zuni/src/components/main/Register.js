import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main id="register">
    <form action="/signup" method="post">
      <h1>Register at ZUNI</h1>
      <input type="text" name="username" placeholder="Enter your Username"/>
      <button type="submit">Submit</button>
      <Link className='link-text' to='/login' exact>Login Instead</Link>
    </form>
    </main>
  )
}

export default Register
