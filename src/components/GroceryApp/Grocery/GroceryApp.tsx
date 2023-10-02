import { useState } from "react";
import GroceryTable from "./GroceryTable";
import Form from "../Form/Form";
import ListFilter from "../ListFilter/ListFilter";
import React from "react";

interface GroceryItem {
	name: string;
	date: Number;
	price: Number;
}

function GroceryApp() {
	const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([]);

	//function to add new items to the list
	const handleAddGroceryItem = (newGroceryItem: GroceryItem) => {
		setGroceryItems([...groceryItems, newGroceryItem]);
	};

	console.log(groceryItems);
	return (
		<div>
			<Form
				handleAddGroceryItem={handleAddGroceryItem}
				groceryItems={groceryItems}
			/>
			<ListFilter />
			<GroceryTable groceryItems={groceryItems} />
		</div>
	);
}

export default GroceryApp;
