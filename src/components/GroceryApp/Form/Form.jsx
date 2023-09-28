import { useState } from "react";
import "./form.css";

function Form({ handleAddGroceryItem, groceryItems }) {
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

		const newGroceryItem = {
			id: Number(groceryItems.length) + 1,
			date: new Date(enteredDate),
			itemName: enteredName,
			price: enteredPrice,
		};

		handleAddGroceryItem(newGroceryItem);

		//reset the form inputs after submit
		setEnteredDate("");
		setEnteredName("");
		setEnteredPrice("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Enter date
					<input type="date" value={enteredDate} onChange={handleDate} />
				</label>
			</div>
			<div>
				<label>
					Enter name
					<input type="text" value={enteredName} onChange={handleName} />
				</label>
			</div>

			<div>
				<label>
					Enter price
					<input type="number" value={enteredPrice} onChange={handlePrice} />
				</label>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;
