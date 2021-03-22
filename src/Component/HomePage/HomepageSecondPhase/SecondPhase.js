import React from "react";
import CardType2 from "../../Common/CardType2/CardType2";
import "./SecondPart.css";

function SecondPhase() {
	return (
		<div className="second">
			<div className="secondContent">
				<CardType2
					topic="defining the leaderBoard"
					details="...creating new oppurtunity in tech space"
				/>
				<CardType2
					topic="trust and team work "
					details="Time management and goal setting from the agile team working on project"
				/>

				<CardType2
					topic="trusted by industries and partners"
					details="collaboration is a key factor for optimum success and breakthroughs"
				/>
			</div>
		</div>
	);
}

export default SecondPhase;
