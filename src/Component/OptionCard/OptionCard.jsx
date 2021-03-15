import React from "react";
import { Card } from "antd";

function OptionCard() {
	const CardOption = () => {
		return (
			<div className="site-card-border-less-wrapper">
				<Card title="Card title" bordered={false} style={{ width: 300 }}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</div>
		);
	};

	return (
		<div>
			<OptionCard />
		</div>
	);
}

export default OptionCard;
