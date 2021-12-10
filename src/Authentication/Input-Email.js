const ResetEmptyEmail = () => {
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
					<input type="text" value="Enter email" />
				</div>
				<div className="form-control form-control2">
					<input type="text " />
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

export default ResetEmptyEmail;
