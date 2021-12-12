import React from "react";
import { check } from "../assets";

const InputWithEmbededImage = ({ placeholder, type, src }) => {
	return (
		<div className="form-control4">
			<div>
				<input type={type} placeholder={placeholder} />
			</div>
			{src && (
				<div>
					<img src={src} alt="check-icon" />
				</div>
			)}
		</div>
	);
};

export default InputWithEmbededImage;
