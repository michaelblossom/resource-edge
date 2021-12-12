import React, { useState } from "react";
import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import MobileNav from "./Authentication/Sign-in";
import InputWithEmbededImage from "./Input-with-embeded-image/InputWithImage";
import FormWithEmbededImage from "./Authentication/Form-With-Embeded-Image";

import FormPasswardEmpty from "./Authentication/Form-Passward-Empty";
import InputPasswardEmpty from "./Authentication/Input-passward-Empty";

import FormValidation from "./Authentication/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseEmployee from "./Dashboard/BaseEmployee";
import NavDropDown from "./Dashboard/NavDropDown";

import SignUp from "./Authentication/Sign-up";
function App() {
	const [showSignin, setShowSignin] = useState(false);

	const signin = () => {
		setShowSignin(!showSignin);
	};
	return (
		<div>
			{showSignin && <MobileNav showSignin={showSignin} signin={signin} />}
			<NavBar signin={signin} />

			{/* <Routes>
				<Route path="/" element={<Signin />} />
				<Route path="/emailfilled" element={<InputEmailFilled />} />
				<Route path="/email" element={<InputEmailTyping />} /> */}

			<Home />
			<Footer />

			{/* <InputPasswardEmpty /> */}
			{/* <FormValidation /> */}
			{/* <SignUp /> */}

			{/* <BaseEmployee /> */}
			{/* <NavDropDown /> */}
			{/* </Routes> */}
		</div>
	);
}

export default App;
