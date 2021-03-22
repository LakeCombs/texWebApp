import React from "react";
import "./CardType.css";

function CardType4({ src, text, story }) {
	return (
		<div className="CardType4">
			<img src={src} />
			<h2>{text}</h2>
			<p>{story}</p>
		</div>
	);
}

export default CardType4;
