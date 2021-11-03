import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <div className="image">
                <img src={props.src} alt={props.name} />
            </div>
            <div className="details">
                <h2 className="name">{props.name}</h2>
                <span>GitHub: </span>&nbsp;&nbsp;<a className="github" href={props.g_link}>{props.g_username}</a>
                <br />
                <span>LinkedIn: </span>&nbsp;&nbsp;<a className="github" href={props.l_link}>{props.l_username}</a>
            </div>
        </div>
    )
}

export default Card
