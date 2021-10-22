import React from 'react'

function Main() {
  return (
    <main id='main' className="main">
      <h1>ZUNI is a state-of-the-art zillion purpose Neural Authentication Interface</h1>
      <div className="brand-logo">
        <img src={process.env.PUBLIC_URL + '/images/ZUNI.jpg'} alt="ZUNI brand logo" />
      </div>
    </main>
  )
}
export default Main

