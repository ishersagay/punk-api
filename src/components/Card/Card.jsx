import React from "react";
import "./Card.scss";

const Card = (props) => {
    const {name, tagline, description, abv, ph, image_url} = props.beer;
    return (
        <>
            <div className="card">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={image_url} className="beer__img"/>
                        </div>
                        <div className="flip-card-back">
                            <h2>Name: {name}</h2>
                            <h3>Tag: {tagline}</h3>
                            <p>{description}</p>
                            <p>abv: {abv}</p>
                            <p>pH: {ph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;