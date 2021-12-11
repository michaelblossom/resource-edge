import React from "react";
import { editIcon } from "../assets";
import InputWithEmbededImage from "../Input-with-embeded-image/InputWithImage";

const FormPasswardEmpty = ({ placeholder }) => {
	return (
		<div className="emptyEmail">
			<div className="logIn">
				<p>Log in</p>
			</div>
			<div className="accessAccount">
				<p>Access your resource edge account</p>
			</div>
			<div className="osita">
				<div>
					<p>Ositadinma Nwangwu</p>
					<small>o.nwangwu@genesistechub.com</small>
				</div>
				<div>
					<img alt="editicon" src={editIcon} />
				</div>
			</div>
			<form className="add-form">
				<div className="form-control control">
					<label>Email Address</label>
					<InputWithEmbededImage placeholder="michael@genesistechub.com" />
				</div>
				<div className="form-control form-control2 second-input">
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

export default FormPasswardEmpty;
