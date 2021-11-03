import React from 'react'

function Failure(props) {
    return (
        <main className="result" id="failure">
            <h1>{ props.message }</h1>
            <h2 className="retry" onClick={() => props.retry()}>Try Again</h2> 
            {/* () => window.location.reload() */}
        </main>
    )
}

export default Failure
