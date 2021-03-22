import { ThumbUpAltOutlined } from "@material-ui/icons";
import React from "react";
import "./CardType3.css";

function CardType3({ topic, story }) {
	return (
		<div className="CardType3">
			<div className="CardType3Header">
				<h2>{topic}</h2>
				<h2>
					<ThumbUpAltOutlined />
				</h2>
			</div>
			<p>{story}</p>
		</div>
	);
}

export default CardType3;
