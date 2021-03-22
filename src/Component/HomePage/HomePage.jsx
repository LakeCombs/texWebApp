import React from "react";
import HeroImage from "./HeroImage/HeroImage";
import OptionCard from "../OptionCard/OptionCard";
import TheNextPart from "./TheNextPart/TheNextPart";
import SecondPhase from "./HomepageSecondPhase/SecondPhase";
import BeforeFooter from "./BeforeFooter/BeforeFooter";
import Footer from "./Footer/Footer";
import SocialMedia from "./SocialMedia/SocialMedia";
import PreFooter from "./PreFooter/PreFooter";

function HomePage() {
	return (
		<div>
			<HeroImage />
			<TheNextPart />
			<SecondPhase />

			<BeforeFooter />
			<PreFooter />
			{/* <Footer /> */}
			<SocialMedia />
			{/* <OptionCard /> */}
		</div>
	);
}

export default HomePage;
