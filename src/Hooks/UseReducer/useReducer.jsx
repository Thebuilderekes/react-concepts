import { useReducer } from "react";

function TryReducer() {
	function reducer(prevState, action) {
		console.log({ prevState }, { action });
		if (action.type === "UP") return prevState + action.value;
	}

	function handleClick() {
		dispatch({ type: "UP", value: 1 });
	}
	const [counter, dispatch] = useReducer(reducer, 0);
	return (
		<div>
			<p>{counter}</p>
			<button onClick={handleClick}>+</button>
		</div>
	);
}
// prevState is taking the value of 0 which is the second argument in the useReducer fuction
// dispatch function in handlClick takes in a value which becomes the action object() to have props of type and value

export default TryReducer;
