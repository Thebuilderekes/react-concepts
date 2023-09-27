import GroceryTable from "./GroceryTab";

const Grocery = () => {
	const groceryItems = [
		{ id: 1, date: new Date(), name: "Apples", price: 1.99 },
		{ id: 2, date: new Date(), name: "Bananas", price: 0.99 },
		{ id: 3, date: new Date(), name: "Milk", price: 2.99 },
	];

	console.log(groceryItems);
	return (
		<div>
			<GroceryTable groceryItems={groceryItems} />
		</div>
	);
};

export default Grocery;
