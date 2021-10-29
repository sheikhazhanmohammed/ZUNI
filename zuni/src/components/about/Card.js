import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <div className="image">
                <img src={process.env.PUBLIC_URL + '/images/' + props.src} alt={'profile ' + props.name} />
            </div>
            <div className="details">
                <h2 className="name">{props.name}</h2>
                <p className="work">{props.work}</p>
                <p className="details">{props.details}</p>
            </div>
        </div>
    )
}

export default Card
