import { useState, useEffect } from "react";
export default function Interval() {
	const [counter, setCounter] = useState(0);
	function handleClick() {
		setCounter(counter + 1);
	}

	useEffect(() => {
		const myInterval = setInterval(() => {
			console.log("interval says hello");
		}, 1000);

		return () => clearInterval(myInterval);
	}, []);
	//this is only going to run on mount
	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={handleClick}>run code</button>
		</div>
	);
}
