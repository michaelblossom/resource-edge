import React from "react";
import Button from "../Button/Button";
import { vector4 } from "../assets";
import { cross } from "../assets";

const MobileNav = ({ signin }) => {
	return (
		<div className=" signin">
			<div className="container">
				<div className="signin-navbar">
					<div>
						<img src={vector4} />
					</div>
					<div onClick={() => signin()}>
						<img src={cross} />
					</div>
				</div>

				<div>
					<p>Featurers</p>
					<p className="about">About</p>
				</div>
				<div className="button">
					<Button value="Log in" color="#0052cc" />
					<Button value="sign up" color="#a8a8a8" textColor="#bec3cd" />
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
