import React, { useEffect } from "react";

// props = {
//     uniqueid : id of component for select,
//     height : height of water  in glass 0 to 100
// }

function Glass(props) {
	useEffect(() => {
		const canvas = document.getElementById(props.uniqueid);
		let context = canvas.getContext("2d");

		context.beginPath();
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.lineWidth = 2;
		context.strokeStyle = "#444";

		context.moveTo(0, 0);
		context.lineTo(0, 150);
		context.lineTo(150, 150);
		context.lineTo(150, 0);
		context.fillStyle = "aqua";
		// set height value HERE  (last parameter)
		context.fillRect(150, 150, -150, -props.height);

		context.closePath();
		context.stroke();
	});

	return (
		<div className={"glass canva " + props.uniqueid}>
			<canvas id={props.uniqueid} height="220" width="170"></canvas>
		</div>
	);
}

export default Glass;
