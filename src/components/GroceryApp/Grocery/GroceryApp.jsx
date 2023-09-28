import { useState } from "react";
import GroceryTable from "./GroceryTable";
import Form from "../Form/Form";

const GroceryApp = () => {
	const [groceryItems, setGroceryItems] = useState([
		{ id: 1, date: new Date(), itemName: "Apples", price: 1.99 },
		{ id: 2, date: new Date(), itemName: "Bananas", price: 0.99 },
		{ id: 3, date: new Date(), itemName: "Milk", price: 2.99 },
	]);

	//function to add new items to the list
	const handleAddGroceryItem = (newGroceryItem) => {
		setGroceryItems([...groceryItems, newGroceryItem]);
	};

	console.log(groceryItems);
	return (
		<div>
			<Form
				handleAddGroceryItem={handleAddGroceryItem}
				groceryItems={groceryItems}
			/>

			<GroceryTable groceryItems={groceryItems} />
		</div>
	);
};

export default GroceryApp;
