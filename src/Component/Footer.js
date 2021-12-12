import React from "react";
import { vector } from "../assets";
import { vector6 } from "../assets";
import { vector7 } from "../assets";
import { vector9 } from "../assets";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="innerFooter container">
				<div>
					<h3>resource edge</h3>
					<p>Throw paperwork in the trash</p>
				</div>
				<div className="media">
					<div className="media-icons">
						<div>
							<img alt="" src={vector6} />
						</div>
						<div>
							<img alt="" src={vector} />
						</div>
						<div>
							<img alt="" src={vector7} />
						</div>
						<div>
							<img alt="" src={vector9} />
						</div>
					</div>
					<div className="small">
						<small>
							copyright Genesys DevStudio.<span> All rights reserved</span>
						</small>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
