import React from "react";
import "./CardType2.css";

function CardType2({ src, topic, details }) {
	return (
		<div className="CardType2">
			<img className="CardType2Image" src={src} />

			<h3>{topic} </h3>
			<p> {details}</p>
		</div>
	);
}

export default CardType2;
