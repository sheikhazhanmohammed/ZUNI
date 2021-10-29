import React, { useState } from 'react'
import Auth from './Auth'
import Loader from './Loader'
import AuthCamera from './AuthCamera'

function Main() {
    const [data, setData] = useState({ 'camera': false, 'image': null })
    const [loginScreen, setLoginScreen] = useState(true)
    const [cameraAuthScreen, setCameraAuthScreen] = useState(false)


    function imageData(cameraOn, imageSrc){
        setData({ 'camera': cameraOn, 'image': imageSrc })
    }
    
    if(data.camera){
        // pass this image data for second authentication step (face detection time)
        console.log(data.image)
    }

    const submit = async ({type, username}) => {
        // steps
        // 0. hide this component
        // 1. display loader
        // 2. fetching data if the username exist or not in the database
        // 3. after the data, render the auth camera page accordingly


        try{
            setLoginScreen(false)
            await fetch(`http://192.168.43.113:8000/${type}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(username)
            }).then(res => res.json())
            .then(json => console.log(json))
            .then(() => setCameraAuthScreen(true))
        }
        catch(error){
            console.error(error)
        }
    }

    return (
        <>
            { loginScreen && <Auth submit={submit} /> }
            { (!loginScreen && !cameraAuthScreen ) && <Loader /> }
            { cameraAuthScreen && <AuthCamera imageData={imageData}/> }
        </>
    )
}

export default Main
