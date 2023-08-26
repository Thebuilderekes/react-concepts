import { useRef, useState } from "react";

function GuessNumber() {
	const randomNumberRef = useRef(null);
	const input = useRef(null);
	const [message, setMessage] = useState(false);
	function guess() {
		randomNumberRef.current = Math.floor(Math.random() * 10) + 1;
		console.log("randomRef", randomNumberRef);
		console.log("input", input);
		if (randomNumberRef.current == input.current.value) {
			setMessage("You win!");
		} else if (randomNumberRef.current > input.current.value) {
			setMessage("too low");
		} else {
			setMessage("You high");
		}
	}
	return (
		<div>
			<input ref={input} type="text" />
			<button onClick={guess}>Guess</button>
			<p>{message}</p>
		</div>
	);
}

export default GuessNumber;

//this component guesses a random number using the number in the input field.
