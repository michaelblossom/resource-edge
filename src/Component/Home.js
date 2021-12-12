import React from "react";

import { directlist2, hero } from "../assets/";
import { group6 } from "../assets/";
import { group7a } from "../assets/";
import { group7b } from "../assets/";
import { frame1 } from "../assets/";
import { ellipse1 } from "../assets/";
import { directlist1 } from "../assets/";
import { image10 } from "../assets/";
import { image9 } from "../assets/";
import { image6 } from "../assets/";
import { group1 } from "../assets";
import { unn } from "../assets/";
import Footer from "./Footer";
import NavBar from "./NavBar";

// import { group7b } from "../assets/";

const Home = ({ signin }) => {
	return (
		<>
			<NavBar signin={signin} />
			<div className="main-header">
				<div className="container main">
					<div>
						<h5>Throw paperwork into the trash where it belongs</h5>
						<p>
							Eliminate all the hassle involved in managing people operations by
							automating it
						</p>
					</div>
					<div className="hero-image">
						<img src={hero} />
					</div>
				</div>

				<div className="vision">
					<div className="container">
						<h3>Human Resources</h3>
						<div className="mission">
							<p>
								Onboard new employees, managed the employee lifecycle and
								measure employee performance
							</p>
						</div>

						<div className="side-bar">
							<div className="grading">
								<img src={group6} />
								<h5>Employee Management</h5>
								<p>
									From & Onboarding to Retiring, the Resource Edge Employee
									Management module eliminate all the complexities & paperwork
									involved in managing your team
								</p>
							</div>
							<div className="grading">
								<img src={group7b} />
								<h5>Performance Management</h5>
								<p>
									Manage and track employee performance with our easy-to-use
									tools for goal setting, performance agreements and performance
									reviews.
								</p>
							</div>
							<div className="grading">
								<img src={group7a} />
								<h5>Paid off time</h5>
								<p>
									Employee can request for paid time-off, vacations, sick leaves
									or educational leaves and get approvals all within Resource
									Edge. HR manager can equally ensure compliance
								</p>
							</div>
						</div>
						<div className="EmployeeDirectory">
							{/* <p>Frame 19864</p> */}
							<img src={frame1} />
						</div>
					</div>
				</div>

				<div className=" container section">
					<div className="admin1">
						<h5>Admin & Logistics</h5>
						<p>
							Manage and track company assets as well as logistics for
							travelling employees
						</p>
					</div>
					<div className="admin2">
						<img src={ellipse1} />
						<h6>Travel & Logistics </h6>
						<p>
							Make travel request, get approvals, and have access to travel
							information
						</p>
					</div>
					<div className="admin3">
						<img src={group7b} />
						<h6>Asset Management</h6>
						<p>
							Mana the aquisition, assignment and disposition of assets
							seamlessly
						</p>
					</div>
				</div>

				<div className="container travelLogistic">
					<img src={directlist1} />
				</div>

				<div className=" container section">
					<div className="admin1">
						<h5>Finance</h5>
						<p>
							Generate invoice, track expenditure, and manage complex payrolls
							for multiple teams and companies
						</p>
					</div>
					<div className="admin2">
						<img src={ellipse1} />
						<h6>Re Vouchers </h6>
						<p>
							Track and manage expenditure for multiple teams across your
							organisation using Resource Edge Vouchers
						</p>
					</div>
					<div className="admin3">
						<img src={group7b} />
						<h6>Payroll</h6>
						<p>
							Our easy to use systems takes away the pain of managing complex
							payrolls for organisations of all sizes
						</p>
					</div>
				</div>

				<div className="container payroll">
					<img src={group1} />
				</div>

				<div className="container logo">
					<div>
						<img src={unn} />
					</div>
					<div>
						<img src={image6} />
					</div>
					<div>
						<img src={image9} />
					</div>
					<div>
						<img src={image10} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
