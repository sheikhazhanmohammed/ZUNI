import React from 'react'

function Loader() {
  return (
    <main id="loader">
      <h1>Processing your photo <span></span></h1>
      <h2>This may take a while to ensure all security checks </h2>
      <div className="loader-wheel"></div>
    </main>
  )
}

export default Loader
