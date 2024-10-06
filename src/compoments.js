import React from "react";
import "./index.css";
import tourData from "./data";

export function Header() {
  return (
    <nav className="nav-container">
      <i className="fa-solid fa-globe"></i> <p> My Travel Journal</p>
    </nav>
  );
}

export function Card(props) {
  return (
    <div className="div-card">
      <div className="div-img">
        <img src={props.img} />
      </div>
      <div className="div-cont">
        <i className="fa-solid fa-location-dot"></i>
        <p className="para1">{props.location}</p>
        <a href={props.googleMapsUrl}>view on google maps</a>
        <h1>{props.title}</h1>
        <h4>{props.date}</h4>
        <p className="para2">{props.description}</p>
      </div>
    </div>
  );
}

export const divs = tourData.map((dest) => {
  return <Card key={dest.id} {...dest} />;
});
