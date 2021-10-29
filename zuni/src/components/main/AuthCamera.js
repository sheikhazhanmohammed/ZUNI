import React, { useState, useRef } from 'react'
import Webcam from "react-webcam";


function WebcamCapture(props){
    const webcamRef = useRef(null);
    const [cameraOn, setCameraOn] = useState(false)

    const click = new Audio(process.env.PUBLIC_URL + '/assets/sound.mp3')

    const capture = () => {
        // props.checkCameraOn(cameraOn)
        if(cameraOn){
            click.play()
            const imageSrc = webcamRef.current.getScreenshot();
            props.imageData(cameraOn, imageSrc)
        }
        else{
            alert('Please turn on the camera first')
        }
    };

    const turnOnCamera = () => { setCameraOn(!cameraOn) }

    // TODO Camera should open as a popup after the login screen 

    return (
        <main id="auth-camera">
            <div className="camera">
                {cameraOn ? 
                (<Webcam id="videoElement" audio={false} ref={webcamRef} screenshotFormat="image/jpeg" mirrored={true} />) 
                : <div id="videoElement"></div>
                }
                
            </div>
            <div className="controls">
                <button id="capture" onClick={capture}>
                    <i className="btn fas fa-camera"></i>
                </button>
                <button id="stop" onClick={turnOnCamera}>
                    <i className="btn fas fa-video-slash"></i>
                </button>
            </div>
        </main>
    );
};

export default WebcamCapture
