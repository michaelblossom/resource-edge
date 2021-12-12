import React from "react";

const Button = ({ value, color, textColor }) => {
	return (
		<button
			className="btn-component"
			style={{ background: color, color: textColor }}>
			{value}
		</button>
	);
};

export default Button;
