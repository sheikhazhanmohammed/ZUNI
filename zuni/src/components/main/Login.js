import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main id="login">
      <form action="/login" method="POST">
        <h1>Login at ZUNI</h1>
        <input type="text" placeholder="Enter your username" name="username"/>
        <button type="submit">Submit</button>
        <Link className='link-text' to='/register' exact>Signup Instead</Link>
      </form>
    </main>
  )
}

export default Login
