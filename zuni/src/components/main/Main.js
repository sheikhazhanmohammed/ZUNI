import React from 'react'
import Auth from './Auth'
import Loader from './Loader'
import AuthCamera from './AuthCamera'

function Main() {
    const imageData = imageSrc => console.log(imageSrc)
    // const checkCameraOn = cameraOn => cameraOn
    // const camon = checkCameraOn()
    imageData()
    // console.log(data)
    // if(checkCameraOn){
    //     console.log('image data: ' + data);
    // }
    const submit = ({type, username}) => {
        // steps
        // 0. activate the loader
        // 1. fetching data if the username exist or not in the database
        // 2. after the data, render the auth camera page accordingly

        // fetch(`http://localhost:5000/${type}`, {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(auth)
        // }).then(res => res.json())
        // .then(json => console.log(json))
    }

    return (
        <>
            <Auth submit={submit} />
            {/* <Loader /> */}
            {/* <AuthCamera imageData={imageData}/> */}
        </>
    )
}

export default Main
