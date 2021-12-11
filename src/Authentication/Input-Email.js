import React, { useState } from "react";
import FormValidation from "./Form";
const InputEmail = ({ value }) => {
	//  Test = () =>{

	// const [field, setField] = useState({});
	// const [error, setError] = useState({});

	// const handleValidation = () => {
	// 	let fields = field;
	// 	let errors = {};
	// 	let formIsValid = true;

	// 	//Name
	// 	if (!fields["name"]) {
	// 		formIsValid = false;
	// 		errors["name"] = "Cannot be empty";
	// 	}

	// 	if (typeof fields["name"] !== "undefined") {
	// 		if (!fields["name"].match(/^[a-zA-Z]+$/)) {
	// 			formIsValid = false;
	// 			errors["name"] = "Only letters";
	// 		}
	// 	}

	// 	//Email
	// 	if (!fields["email"]) {
	// 		formIsValid = false;
	// 		errors["email"] = "Cannot be empty";
	// 	}

	// 	if (typeof fields["email"] !== "undefined") {
	// 		let lastAtPos = fields["email"].lastIndexOf("@");
	// 		let lastDotPos = fields["email"].lastIndexOf(".");

	// 		if (
	// 			!(
	// 				lastAtPos < lastDotPos &&
	// 				lastAtPos > 0 &&
	// 				fields["email"].indexOf("@@") == -1 &&
	// 				lastDotPos > 2 &&
	// 				fields["email"].length - lastDotPos > 2
	// 			)
	// 		) {
	// 			formIsValid = false;
	// 			errors["email"] = "Email is not valid";
	// 		}
	// 	}

	// 	setError({ errors: errors });
	// 	return formIsValid;
	// };

	// const contactSubmit = (e) => {
	// 	e.preventDefault();

	// 	if (handleValidation()) {
	// 		alert("Form submitted");
	// 	} else {
	// 		alert("Form has errors.");
	// 	}
	// };

	// const handleChange = (field, e) => {
	// 	let fields = field;
	// 	fields[field] = e.target.value;
	// 	setField({ field });
	// };

	// return (
	// 	<div>
	// 		<form name="contactform" onSubmit={contactSubmit}>
	// 			<div>
	// 				<input
	// 					ref="name"
	// 					type="text"
	// 					size="30"
	// 					placeholder="Name"
	// 					onChange={handleChange}
	// 					value={field["name"]}
	// 				/>

	// 				<span style={{ color: "red" }}>{error["name"]}</span>
	// 			</div>
	// 		</form>
	// 	</div>
	// );

	// return (
	// 	<div className="emptyEmail">
	// 		<div className="logIn">
	// 			<p>Log in</p>
	// 		</div>
	// 		<div className="accessAccount">
	// 			<p>Access your resource edge account</p>
	// 		</div>
	// 		<form className="add-form">
	// 			<div className="form-control">
	// 				<label>Email Address</label>
	// 				<input type="email" placeholder="Enter email" />
	// 			</div>
	// 			<div className="form-control form-control2">
	// 				<input type="submit" value="Log in" />
	// 			</div>
	// 			<div className="form-control form-control3">
	// 				<input type="text " />
	// 			</div>
	// 		</form>
	// 		<div className="passward">
	// 			<p>Forgotten passward?</p>
	// 		</div>
	// 	</div>
	// );

	return (
		<div>
			<FormValidation />
		</div>
	);
};

export default InputEmail;
