import React from 'react'

function Success() {
  return (
    <main class="result" id="success" style={{display: 'none'}}>
      <h1>Successfully authenticated, Welcome to the party</h1>
      <img src="{{ url_for('static', filename='images/success.png') }}" alt="" />
    </main>
  )
}

export default Success
