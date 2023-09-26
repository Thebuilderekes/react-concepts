import { useState } from "react";

function State() {
	const [count, setCount] = useState(0);

	const handleClick = () => setCount(count + 1);
	return (
		<div>
			<p>{count}</p>

			<button onClick={handleClick}>increase count</button>
		</div>
	);
}

export default State;
