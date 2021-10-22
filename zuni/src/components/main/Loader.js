import React from 'react'

function Loader() {
  return (
    <main id="loader" style={{display: 'none'}}>
      <h1>Processing your photo .....</h1>
      <h3>This may take a while to ensure all security checks</h3>
      <div class="loader-wheel"></div>
    </main>
  )
}

export default Loader
