import { useState } from "react";
const Input = () => {
	const [inputValue, setInputValue] = useState("");
	const handleInputChange = (event) => {
		const value = event.target.value;
		setInputValue(value);
		console.log(` ${value}`);
	};
	return <input type="text" value={inputValue} onChange={handleInputChange} />;
};
export default Input;
