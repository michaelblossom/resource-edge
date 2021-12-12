import React from "react";
import { check } from "../assets";
import InputWithEmbededImage from "../Input-with-embeded-image/InputWithImage";

const FormValidation = ({ placeholder }) => {
	return (
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
					<input type="submit" value="Log in" />
				</div>
				<div className="form-control form-control3">
					<input type="text " />
				</div>
			</form>
			<div className="passward">
				<p>Forgotten passward?</p>
			</div>
		</div>
	);
};

export default FormValidation;
