import React from "react";
import { check } from "../assets";

const InputWithEmbededImage = ({ placeholder }) => {
	return (
		<div className="form-control4">
			<div>
				<input placeholder={placeholder} />
			</div>
			<div>
				<img src={check} alt="check-icon" />
			</div>
		</div>
	);
};

export default InputWithEmbededImage;
