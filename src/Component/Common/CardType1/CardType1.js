import React from "react";
import "./CardType1.css";

function CardType1({ src, topic, story }) {
	return (
		<div className="TheType1Card">
			<img className="TheType1CardImage" scr={src} />

			<h2>{topic}</h2>

			<p>{story}</p>
		</div>
	);
}

export default CardType1;
