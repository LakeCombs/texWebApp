import React from "react";
import "./BeforeFooter.css";
import fb from "../../photos/logo_facebook-1.png";
import micro from "../../photos/logo_microsoft-1.png";
import linux from "../../photos/logo_theLinuxFoundation.png";
import js from "../../photos/javascript.png";
import node from "../../photos/nodejs.png";
import phy from "../../photos/python.png";
import php from "../../photos/php.png";
import ruby from "../../photos/ruby.png";
import java from "../../photos/java.png";

function BeforeFooter() {
	return (
		<div className="BeforeFooter">
			<div className="BeforefooterContent">
				<h2>Our Partners</h2>

				<div className="Partners">
					<img scr={micro} />
					<img src={fb} />
					<img src={linux} />
					<p>CodeLab</p>
					<p>CodeVillage</p>
				</div>
				<div className="outStack">
					<h2>Our Services </h2>
					<p>
						we have agile software engineers, businness management , market
						analyst and
					</p>
				</div>

				<div className="stackImages">
					<img scr={phy} /> <img src={node} /> <img src={ruby} />{" "}
					<img src={js} /> <img src={java} />
					<img src={php} />
					<p>Project management</p> <p>SEO</p>{" "}
					<p> Data Analsis And Visualization </p>
				</div>
			</div>
		</div>
	);
}

export default BeforeFooter;
