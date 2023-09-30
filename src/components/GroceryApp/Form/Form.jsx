import { useState } from "react";
import "./form.css";

function Form({ handleAddGroceryItem, groceryItems }) {
	const [enteredName, setEnteredName] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [enteredPrice, setEnteredPrice] = useState("");
	const [error, setError] = useState(false);

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

		if (!enteredDate === "" && !enteredPrice === "" && !enteredDate === "") {
			const newGroceryItem = {
				id: Number(groceryItems.length) + 1,
				date: new Date(enteredDate),
				itemName: enteredName,
				price: enteredPrice,
			};

			handleAddGroceryItem(newGroceryItem);
		} else {
			setError(true);
		}
		//reset the form inputs after submit
		setEnteredDate("");
		setEnteredName("");
		setEnteredPrice("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="container">
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
				{error ? <p role="alert">Please fill all fields</p> : " "}
			</div>
			<button type="submit">Add item</button>
		</form>
	);
}

export default Form;
