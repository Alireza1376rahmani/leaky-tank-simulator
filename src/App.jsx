import "./App.css";
import { useState } from "react";
import Shape from "./components/shape/index";
import Chart from "./components/Chart";

function App() {
	const [Xd, setXd] = useState([
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
		1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5,
		0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
	]);
	// const [Xd, setXd] = useState([
	// 	0, 0.1, 0.19, 0.271, 0.3439, 0.40951, 0.468559, 0.521703, 0.569533,
	// 	0.61258, 0.651322, 0.68619, 0.717571, 0.745814, 0.771233, 0.79411,
	// 	0.814699, 0.833229, 0.849906, 0.864915, 0.878424, 0.890582, 0.901524,
	// 	0.911372, 0.920235, 0.928211, 0.93539, 0.941851, 0.947666, 0.952899,
	// 	0.957609, 0.961848, 0.965663, 0.969097, 0.972187, 0.974968, 0.977471,
	// 	0.979724, 0.981752, 0.983577, 0.985219, 0.986697, 0.988027, 0.889224,
	// 	0.800302, 0.720272, 0.648245, 0.583421, 0.525079, 0.472571, 0.425314,
	// 	0.382783, 0.344505, 0.310055, 0.27905, 0.251145, 0.226031, 0.203428,
	// 	0.183085, 0.164776, 0.148298, 0.133468, 0.120121, 0.108109, 0.097298,
	// 	0.087568, 0.078811, 0.07093, 0.063837, 0.057453, 0.051708, 0.046537,
	// ]);
	const [t, setT] = useState(0.1);
	const [Tow, setTow] = useState(1);
	const [K, setK] = useState(1);
	const [Yd, setYd] = useState(ydCalculator(Xd, t / Tow));
	const [Hd, setHd] = useState(hdCalculator(Xd, Yd));

	function ydCalculator(xd, TbeTow) {
		let yd = [0.0];

		for (let i = 0; i < xd.length; i++) {
			yd[i + 1] = (TbeTow * xd[i] + (1 - TbeTow) * yd[i]).toFixed(6);
		}
		return yd;
	}

	function hdCalculator(xd, yd) {
		let hd = [0.0];

		for (let i = 0; i < xd.length; i++) {
			hd[i + 1] = hd[i] + xd[i] - yd[i];
		}
		return hd;
	}

	return (
		<div className="App">
			<div className="form"></div>
			<div className="shape">
				<Shape xd={Xd} hd={Hd} yd={Yd} t={t} />
			</div>
			<div className="charts" style={{ minHeight: "100vh" }}>
				<Chart uniqueid="mychart" yd={Yd} hd={Hd} t={t} />
			</div>
		</div>
	);
}

export default App;
