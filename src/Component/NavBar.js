import React from "react";

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
						<button className="btn sign-up ">Sign up</button>
						<button className="btn sign-in">Sign in</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
