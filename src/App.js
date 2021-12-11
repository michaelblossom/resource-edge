import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Signin from "./Authentication/Sign-in";
// import inputEmail from "./Authentication/Input-Email";
import InputEmail from "./Authentication/Input-Email";
import InputEmailTyping from "./Authentication/Input-Email-Typing";
import InputEmailFilled from "./Authentication/Input-Email-Filled";
import InputWithEmbededImage from "./Input-with-embeded-image/InputWithImage";
import FormWithEmbededImage from "./Authentication/Form-With-Embeded-Image";

import InputEmailLoading from "./Authentication/Input-Email-Loading";
import FormPasswardEmpty from "./Authentication/Form-Passward-Empty";

function App() {
	return (
		<div>
			<NavBar />
			{/* <Home /> */}
			{/* <Footer /> */}
			{/* <Signin /> */}
			{/* <InputEmail /> */}
			{/* <InputEmailTyping /> */}

			{/* <InputEmailFilled /> */}
			{/* <InputEmailLoading /> */}
			<FormPasswardEmpty />

			{/* <FormWithEmbededImage /> */}
			{/* <InputWithEmbededImage /> */}
		</div>
	);
}

export default App;
