import { useState } from "react";
import GroceryTable from "./GroceryTable";
import Form from "../Form/Form";

const GroceryApp = () => {
	const [groceryItems, setGroceryItems] = useState([]);

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
