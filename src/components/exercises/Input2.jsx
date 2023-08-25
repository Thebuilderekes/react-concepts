import { useRef } from "react";

const Input = () => {
	const inputRef = useRef(null);
	const focusInput = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<input ref={inputRef} type="text" placeholder="hello" />
			<button onClick={focusInput}>Focus Input</button>
		</div>
	);
};

export default Input;

// we import the React library and the useRef hook. Inside the Input component, we create a ref using the useRef hook and assign it to the inputRef constant. When the button is clicked, the focusInput function is called, which uses the focus method on the inputRef to focus the input element. The ref is attached to the <input> element using the ref attribute.
