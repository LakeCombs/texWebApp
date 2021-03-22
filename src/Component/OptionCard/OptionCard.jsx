import React from "react";
import "./OptionCard.css";
import { Card } from "antd";

function OptionCard() {
	const CardOption = () => {
		return (
			<div className="site-card-border-less-wrapper">
				<Card title="Card title" bordered={true} className="CardStyle">
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</div>
		);
	};

	return (
		<div className="theCardHolder">
			<CardOption />
			<CardOption />
			<CardOption />
        
		</div>
	);
}

export default OptionCard;
