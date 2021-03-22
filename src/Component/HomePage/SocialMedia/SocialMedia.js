import React from "react";
import "./SocialMedia.css";
import wa from "../../photos/005-whatsapp.png";
import twit from "../../photos/008-twitter.png";
import goog from "../../photos/033-google-plus.png";
import fb from "../../photos/036-facebook.png";
import wiki from "../../photos/004-wikipedia.png";
import quora from "../../photos/019-quora.png";
import pin from  "../../photos/021-pinterest.png"
import link from  "../../photos/027-linkedin.png"
import inst from "../..//photos/029-instagram.png"

export default function SocialMedia() {
	return (
		<div className="socailMedia">
			<div className="SocialMediaContent">
				<img src={wa} />
				<img src={twit} />
				<img src={goog} />
				<img src={wiki} /> 
				<img src={fb} />
				<img src={quora} />
				<img src={pin} />
				<img src={link} />
				<img src ={inst} />
			</div>
		</div>
	);
}
