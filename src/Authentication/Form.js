import React from "react";
import { check } from "../assets";
import { group } from "../assets";
import { group43 } from "../assets";
import { group44 } from "../assets";
import InputWithEmbededImage from "../Input-with-embeded-image/InputWithImage";

const FormValidation = ({ placeholder }) => {
	return (
		<>
			<div>
				<div>
					<img />
				</div>
				<div>
					<div className="logo-image container">
						<img alt="logo image" src={group} />
					</div>
					<div className="emptyEmail">
						<div className="logIn">
							<p>Log in</p>
						</div>
						<div className="accessAccount">
							<p>Access your resource edge account</p>
						</div>
						<form className="add-form">
							<div className="form-control">
								<label>Email Address</label>
								{/* <input type="email" placeholder={placeholder} /> */}
								<InputWithEmbededImage placeholder="Enter Email" type="email" />
							</div>
							<div className="form-control form-control2">
								<button className="btn btn-primary btn-block">Login</button>
							</div>
							<div className="form-control form-control3">
								<input type="text " />
							</div>
						</form>
						<div className="passward">
							<p>Forgotten passward?</p>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</>
	);
};

export default FormValidation;
