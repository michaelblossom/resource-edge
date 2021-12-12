import React from "react";
import Button from "../Button/Button";
import { vector4 } from "../assets";
import { cross } from "../assets";
import { logo } from "../assets";

const MobileNav = ({ signin }) => {
	return (
		<div className=" signin">
			<div className="container-mobile">
				<div className="signin-navbar">
					<div>
						<img src={logo} />
					</div>
					<div onClick={() => signin()}>
						<img src={cross} />
					</div>
				</div>
				<ul className="mobile-nav-links">
					<li>Featurers</li>
					<li>About</li>
				</ul>

				<div className="button">
					<button className="btn btn-primary btn-block">Login</button>
					<button className="btn btn-default btn-block">Login</button>
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
