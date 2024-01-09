import React from "react";
import geoAlt from "../images/geo-alt.svg";

export default function Card(props) {
  return (
    <div className="cards">
      <img src={props.items.imageUrl} className="card--image" />
      <div className="card--body">
        <div className="card--location">
            {/* <img src={geoAlt} />  */}
            <p className="card--country">{props.items.location}</p>
            <p className="card--link">
            <a href={props.items.googleMapsUrl} target="_blank">view on Google Maps</a>
          </p>
        </div>
        <h2 className="card--header">
            {props.items.title}
        </h2>
        <p className="card--date">
            {props.items.startDate} - {props.items.endDate}
        </p>
        <p className="card--text">
            {props.items.description}
        </p>
      </div>
    </div>
  );
}
