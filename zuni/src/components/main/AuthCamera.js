import React from 'react'

function AuthCamera() {
  return (
    <main id="auth-camera">
      <div class="camera">
        <video autoplay="true" id="videoElement"></video>
        <canvas style={{display: 'none'}} id="canvas" width="320" height="240"></canvas>
      </div>
      {/* <p style={{display: 'none'}} id="user">{{ user }}</p> */}
      <div class="controls">
        <button type="submit" id="capture"><i class="btn fas fa-camera" onclick=""></i></button>
        <button onclick="(e) => e.preventDefault()" id="stop"><i class="btn fas fa-video-slash"></i></button>
      </div>
      <h2 id="res-prediction"></h2>
    </main>
  )
}

export default AuthCamera
