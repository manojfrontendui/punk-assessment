import React from 'react';
import './Beer.css';

function Beer(props) {
    const { beer } = props;
    return (
        <div className="beer-card">
            <div className="image">
                <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="details">
                <h1 className="title">{beer.name}</h1>
                <p className="tag-line">{beer.tagline}</p>
                <div className="d-flex">
                    <p>{beer.abv}%</p>
                    <p>{beer.first_brewed}</p>
                </div>
                <button className="details-btn" onClick={() => props.history.push(`/beers/${beer.id}`)}>Details</button>
            </div>
        </div>
    )
}

export default Beer;
