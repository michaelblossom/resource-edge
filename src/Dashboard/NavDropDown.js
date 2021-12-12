import React from "react";
import { group6 } from "../assets";
import { group7a } from "../assets";
import { check } from "../assets";

const NavDropDown = () => {
	return (
		<div>
			<div className="dropDown container">
				<p className="name">OSITADINMA NWANGWU</p>
				<p className="profile">Profile</p>
				<p className="use">Use Resource Edge as</p>
				<div className="employee">
					<div className="employee2">
						<div>
							<img alt="small image icon" src={group6} />
						</div>
						<div>
							<p>Employee</p>
						</div>
					</div>
					<div>
						<img alt="small image icon" src={check} />
					</div>
				</div>
				<div className="employee">
					<div className="employee2">
						<div>
							<img alt="small image icon" src={group6} />
						</div>
						<div>
							<p>Talent Manager</p>
						</div>
					</div>
					<div>{/* <img alt="small image icon" src={check} /> */}</div>
				</div>
			</div>
		</div>
	);
};

export default NavDropDown;
