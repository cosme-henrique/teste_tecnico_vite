import { useState } from "react";
import { Container } from "./style";

function Card({ cardData }) {

    return (
        <Container>
            <img src={cardData.image} alt="Card Image" />

            <div className="container-info">
                <h2>{cardData.name}</h2>

                <div className="container-status">
                    <span>{cardData.status}</span>
                    <span>-</span>
                    <span>{cardData.species}</span>
                </div>

                <div className="container-location">
                    <h3>Last known location:</h3>
                    <span>{cardData.location.name}</span>
                </div>

                <div className="container-origin">
                    <h3>First seen in:</h3>
                    <span>{cardData.origin.name}</span>
                </div>
            </div>
        </Container>
    )
}

export default Card