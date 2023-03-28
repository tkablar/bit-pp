import './HeroCard.css'
import { MyTeam } from './MyTeam';
import { useState } from 'react';

export const HeroCard = ({ name, image, id }) => {



    return (
        <div key={id} id={id} className="hero-card">
            <p style={{ textAlign: "center" }}>{name}</p>
            <div style={{ width: "80%", margin: "0em auto" }}>
                <img className="hero-image" src={image} alt="" />
            </div>
            <div style={{ width: "80%", margin: "1em auto" }}>
                <button style={{ width: "40%", marginRight: "1em" }}>Info</button>
                <button>Add</button>
            </div>
        </div>
    )
}