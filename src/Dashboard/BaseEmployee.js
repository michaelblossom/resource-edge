import React from "react";
import { separator } from "../assets";
import { circle } from "../assets";
import { image1 } from "../assets";
import { menu } from "../assets";

const BaseEmployee = () => {
	return (
		<div className="baseEmployee">
			<div className="containr">
				<div className="navBar">
					<div className="resourseEdge">
						<div>
							<img alt="menu" src={menu} />
						</div>
						<div className="menu">
							<p>resource edge</p>
						</div>
						<div>
							<img alt="separator" src={separator} />
						</div>
						<div>
							<p>TM Dashboard</p>
						</div>
					</div>
					<div className="human">
						<img alt="human icon" src={image1} />
					</div>
				</div>
				{/* <div>
					<img alt="human icon" src={image1} />
				</div> */}
			</div>
			<div className="container">
				<div>
					<h3>Hello, Ositadinma Nwangwu</h3>
					<p>Welcome and good to have you back</p>
				</div>
				<div className="things-to-do">
					<h5>Things to do</h5>

					<div className="requirements">
						<div className="requirements2">
							<div>
								<img alt="menu" src={circle} />
							</div>
							<div>
								<p>Upload your employee performance agreement</p>
							</div>
						</div>
						<div className="start begin">
							<p>Begin</p>
						</div>
					</div>
					<div className="requirements">
						<div className="requirements2">
							<div>
								<img alt="menu" src={circle} />
							</div>
							<div>
								<p>Start quarterly self review</p>
							</div>
						</div>
						<div className="start resume">
							<p>Resume</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BaseEmployee;
