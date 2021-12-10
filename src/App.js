import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Signin from "./Authentication/Sign-in";
import ResetEmptyEmail from "./Authentication/Reset-Passward-Empty-email";

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<Footer />
			{/* <Signin /> */}

			{/* <ResetEmptyEmail /> */}
		</div>
	);
}

export default App;
