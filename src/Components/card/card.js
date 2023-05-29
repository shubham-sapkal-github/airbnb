import React from "react";
import "./card.css";
// import katie from "../../../public";
import star from "../../Image/star.png";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../Images/${props.card.coverImg}`} alt="katie" />
      <div className="rating">
        <img src={star} alt="star" />
        <p>
          {props.card.stats.rating}{" "}
          <span className="grey">
            ({props.card.stats.reviewCount}) . {props.card.location}
          </span>
        </p>
      </div>
      <div className="para">
        <p className="title">{props.card.title}</p>
        <p>
          <span className="price">From ${props.card.price}</span> / person
        </p>
      </div>
    </div>
  );
}
