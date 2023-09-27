import { useState } from "react";
import "./form.css";

function Form() {
	const [enteredName, setEnteredName] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [enteredPrice, setEnteredPrice] = useState("");

	function handleName(e) {
		e.preventDefault();
		setEnteredName(e.target.value);
	}
	function handleDate(e) {
		e.preventDefault();
		setEnteredDate(e.target.value);
	}
	function handlePrice(e) {
		e.preventDefault();
		setEnteredPrice(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log("adding");

		const formData = {
			date: new Date(enteredDate),
			name: enteredName,
			price: enteredPrice,
		};

		console.log(formData);

		setEnteredDate("");
		setEnteredName("");
		setEnteredPrice("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					date
					<input type="date" value={enteredDate} onChange={handleDate} />
				</label>
			</div>
			<div>
				<label>
					name
					<input type="text" value={enteredName} onChange={handleName} />
				</label>
			</div>

			<div>
				<label>
					price
					<input type="number" value={enteredPrice} onChange={handlePrice} />
				</label>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;
