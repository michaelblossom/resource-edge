import React from "react";
import { menu } from "../assets";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="nav-bar">
			<div className="container">
				<div className="header">
					<ul>
						<li className="resource">
							<a className="resource" href="#">
								resource edge
							</a>
						</li>
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
					</ul>

					<div>
						<button className="btn sign-up ">
							<Link to="/emailfilled">Sign up</Link>
						</button>
						<button className="btn sign-in">Sign in</button>
					</div>
				</div>

				<div className="secondNav">
					<div>
						<img src={menu} />
					</div>
					<div>
						<img src={menu} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
