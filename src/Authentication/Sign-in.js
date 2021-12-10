import React from "react";
import Button from "../Button/Button";
import { vector4 } from "../assets";
import { vector8 } from "../assets";

const Signin = () => {
	return (
		<div className=" signin">
			<div className="container">
				<div className="signin-navbar">
					<div>
						<img src={vector4} />
					</div>
					<div>
						<img src={vector8} />
					</div>
				</div>

				<div>
					<p>Featurers</p>
					<p className="about">About</p>
				</div>
				<div className="button">
					<Button />
					<Button />
				</div>
			</div>
		</div>
	);
};

export default Signin;
