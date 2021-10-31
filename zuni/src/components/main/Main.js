import React, { useState } from 'react'
import Auth from './Auth'
import Loader from './Loader'
import AuthCamera from './AuthCamera'
import Failure from './Failure'
import Success from './Success'

function Main() {
    const [data, setData] = useState({ 'camera': false, 'image': null })
    const [loginScreen, setLoginScreen] = useState(true)
    const [cameraAuthScreen, setCameraAuthScreen] = useState(false)
    const [result, setResult] = useState(null)
    const [failureMessage, setFailureMessage] = useState("")

    function imageData(cameraOn, imageSrc){
        setData({ 'camera': cameraOn, 'image': imageSrc })
    }
    
    // Auth level #1 --> check the database for username
    const submit = async ({type, username}) => {
        try{
            setLoginScreen(false)
            await fetch(`http://127.0.0.1:5000/${type}`, {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username })
            })
            .then(res => res.json())
            .then(dataCheck => {
                if(dataCheck.user === username) setCameraAuthScreen(true)
                else{
                    setFailureMessage("An error occured. Maybe your username is not registered yet or if you are trying to register, try with some other username")
                    setResult(false)
                }
            })
        }
        catch(error){ console.log(error) }
    }

    // Auth level #2, camera test
    const handleSubmit = async event => {
        event.preventDefault()
        if(data.camera){
            try{
                setCameraAuthScreen(false)
                await fetch('http://127.0.0.1:5000/test-image', {
                    method: 'POST',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                    body: JSON.stringify(data.image)
                })
                .then(res => res.json())
                .then(response => {
                    setFailureMessage("Malicious user detected")
                    setResult(response.verified)
                })
            }
            catch(error){ console.log(error) }
        }
    }

    return (
        <>
            { loginScreen && <Auth submit={submit} /> }
            { cameraAuthScreen && <form onSubmit={handleSubmit}><AuthCamera imageData={ imageData }/></form> }
            { (!loginScreen && !cameraAuthScreen && (result === null) ) && <Loader /> }
            { result !== null && (result === true ? <Success/> : <Failure message={failureMessage}/>) }
        </>
    )
}

export default Main
