import React from "react";
import globeIcon from '../images/globe-americas.svg'

export default function Header() {
    return(
        <div className="header">
            <img src={globeIcon} className="header--image" />
            <p className="header--text">my travel journal.</p>
        </div>
    )
}