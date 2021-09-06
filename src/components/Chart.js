import React from "react";
import { Line } from "react-chartjs-2";

function Chart(props) {
	return (
		<>
			{/* <canvas id={props.uniqueid}></canvas> */}
			<Line
				data={{
					labels: props.yd.map((item, index) =>
						(index * props.t).toFixed(2)
					),
					datasets: [
						{
							label: "Leonhard Euler Method ", // Name the series
							data: props.yd, // Specify the data values array
							fill: false,
							borderColor: "#2196f3", // Add custom color border (Line)
							backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
							borderWidth: 1, // Specify bar border width
						},
						{
							label: "Height ", // Name the series
							data: props.hd, // Specify the data values array
							fill: false,
							borderColor: "#962103", // Add custom color border (Line)
							backgroundColor: "#962103", // Add custom color background (Points and Fill)
							borderWidth: 1, // Specify bar border width
						},
					],
				}}
				options={{
					responsive: true, // Instruct chart js to respond nicely.
					maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
					animation: {
						x: {
							type: "number",
							easing: "linear",
							duration: 1000 * props.t,
							from: NaN, // the point is initially skipped
							delay(ctx) {
								if (ctx.type !== "data" || ctx.xStarted) {
									return 0;
								}
								ctx.xStarted = true;
								return ctx.index * 1000 * props.t;
							},
						},
						y: {
							type: "number",
							easing: "linear",
							duration: 1000 * props.t,
							from: NaN,
							delay(ctx) {
								if (ctx.type !== "data" || ctx.yStarted) {
									return 0;
								}
								ctx.yStarted = true;
								return ctx.index * 1000 * props.t;
							},
						},
					},
				}}
			/>
		</>
	);
}

export default Chart;
