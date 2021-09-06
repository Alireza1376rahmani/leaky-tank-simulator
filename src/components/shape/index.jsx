import React, { useEffect, useState } from "react";
import Glass from "./Glass";
import Water from "./Water";

function Shape(props) {
	const [time, setTime] = useState(0);

	// useEffect(() => {
	// 	while (time < 5*(props.xd.length)) {
	// 		setTimeout(() => {
	//             setTime(prev=>prev+1)
	//         }, 1000 * props.t);
	// 	}
	// }, []);

	useEffect(() => {
		if (time < props.xd.length) {
			setTimeout(() => {
				setTime((prev) => prev + 1);
			}, 1000 * props.t);
		}
	}, [props.t, props.xd.length, time]);

	return (
		<div className="shape">
			<Water
				uniqueid="first-water"
				value={props.xd[time] ? props.xd[time] * 100 : 0}
			/>
			<Glass uniqueid="first-glass" height={props.hd[time] * 10} />
			<Water uniqueid="second-water" value={props.yd[time] * 100} />
            
		</div>
	);
}

export default Shape;
