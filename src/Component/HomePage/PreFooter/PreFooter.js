import React from "react";
import CardType3 from "../../Common/CardType3/CardType3";
import CardType4 from "../../Common/CardType4/CardType4";
import "./PreFooter.css";

function PreFooter() {
	return (
		<div className="PreFooter">
			<div className="PrefooterContent">
				<CardType3
					topic="Core Values"
					story="time is the most valueable asset therefore every moment must count for something, remember big dreams are little moment in time put into work accumulated to form the present success"
				/>
				<CardType3
					topic="Ethics"
					story="keeping a good Work ethics not only make you work fast, it bring out the best in out the overall project and impact on the team"
				/>

				<CardType3
					topic="Core Values"
					story="time is the most valueable asset therefore every moment must count for something, remember big dreams are little moment in time put into work accumulated to form the present success"
				/>
				<CardType3
					topic="Ethics"
					story="keeping a good Work ethics not only make you work fast, it bring out the best in out the overall project and impact on the team"
				/>
			</div>
			<div className="whyChooseUs">
				<div className="WhychooseUsHeader">
					<h2>WHY CHOOSE US</h2>
					<h4>Innovation Service Excellence</h4>
				</div>
				<div className="theCard4Holder">
					<CardType4
						text="lake Combs"
						story="the tex is a asuper awesome compoany"
					/>
					<CardType4
						text="lake Combs"
						story="the tex is a asuper awesome compoany"
					/>

					<CardType4
						text="lake Combs"
						story="the tex is a asuper awesome compoany"
					/>

					<CardType4
						text="lake Combs"
						story="the tex is a asuper awesome compoany"
					/>
				</div>
			</div>
		</div>
	);
}

export default PreFooter;
