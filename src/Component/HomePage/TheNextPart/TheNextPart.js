import React from "react";
import CardType1 from "../../Common/CardType1/CardType1";
import "./thenextpart.css";

function TheNextPart() {
	return (
		<div className="theNextPart">
			<div className="TheNextPartContent">
				<div className="theTextCard">
					<h3>Welcome to tex</h3>
					<br />
					<p>
						the i s eeohh dndlneo jeuo mjjko thei nldj nvvhui wrtsgi nhdu prho
						qethu theei bheu nhi ,orrjio otuih bhioj nvhueeo pjurio
					</p>
				</div>
				<div className="theType1CardHolder">
					<CardType1
						topic="leading the forefront"
						story="top class engineer working on project from across the world"
					/>
					<CardType1
						topic="excellence is the product"
						story="we put customer first cos we work with the most agile team of project"
					/>
					<CardType1
						topic="changing the future"
						story="we spend time to develope product that shape the future and make our client experience better, this is our core focus"
					/>
					<CardType1
						topic="Customers First Protocol"
						story="customer don't care how it was made, they only want to use it if it work,therefore our product are customer centered"
					/>
				</div>
			</div>
		</div>
	);
}

export default TheNextPart;
