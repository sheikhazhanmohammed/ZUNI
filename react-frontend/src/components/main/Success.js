import React from 'react'

function Success(props) {
  return (
    <main className="result" id="success">
      <h1>{ props.message }</h1>
      <h2>Successfully authenticated, Welcome to the party</h2>
    </main>
  )
}

export default Success
