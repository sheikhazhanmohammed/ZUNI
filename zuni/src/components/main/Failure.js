import React from 'react'
    
function Failure(props) {
    return (
        <main className="result" id="failure">
            <h1>{props.message}</h1>
            <h2 className="retry" onClick={() => window.location.reload()}>Try Again</h2>
        </main>
    )
}

export default Failure
