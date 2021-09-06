import React, { useEffect } from "react";

// props = {
//     uniqueid : id of component for select,
//     value : value of water presure 0 to 100
// }

function Water(props) {
	function pontsGenerator(value) {
		// returns  [x,y] as resaut
		let x = [0, 70, 70 + value];
		let y = [0, 250, 250];
		return [x, y];
	}

	useEffect(() => {
		const canvas = document.getElementById(props.uniqueid);
		let [x, y] = pontsGenerator(props.value);
		let context = canvas.getContext("2d");

		context.beginPath();
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.lineWidth = 0;
		context.strokeStyle = "#00009900";
		context.moveTo(x[0], y[0]);
		// context.lineTo(60, 180);
		context.bezierCurveTo(
			x[0] + x[1],
			y[0] + y[1] / 5,
			x[1],
			y[1],
			x[1],
			y[1]
		);
		context.lineTo(x[2], y[2]);
		context.bezierCurveTo(x[2], y[2], x[0] + x[2], y[0] + y[2] / 5, 0, 0);

		context.fillStyle = "skyblue";
		context.fill();
		context.closePath();
		context.stroke();
	});

	return (
		<div className={"water canva " + props.uniqueid}>
			<canvas id={props.uniqueid} height="260"></canvas>
		</div>
	);
}

export default Water;
