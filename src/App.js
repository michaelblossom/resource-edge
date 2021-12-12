import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Signin from "./Authentication/Sign-in";
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
	return (
		<div>
			<NavBar />

			{/* <Routes>
				<Route path="/" element={<Signin />} />
				<Route path="/emailfilled" element={<InputEmailFilled />} />
				<Route path="/email" element={<InputEmailTyping />} /> */}

			<Home />
			<Footer />
			<Signin />
			{/* <InputPasswardEmpty /> */}
			{/* <FormValidation /> */}
			{/* <SignUp /> */}

			<BaseEmployee />
			<NavDropDown />
			{/* </Routes> */}
		</div>
	);
}

export default App;
