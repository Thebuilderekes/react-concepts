import { useRef } from "react";

function UseReference() {
	const ref = useRef(0);

	console.log(ref);
	function handleClick() {
		ref.current++;
		console.log(ref);
	}

	return (
		<div>
			<button onClick={handleClick}>click</button>
		</div>
	);
}

export default UseReference;

// ref is an object that has a "current" property in it by default.
//useRef does not affect any change in the DOM.  It is only used to store the reference to a value outside of jsx while you work. You SHOULD NOT USE IT IN JSX BECAUSE IT WILL NOT WORK TO CHANGE STATE.
