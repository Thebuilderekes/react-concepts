import "./grocery.css";
import DateCard from "../DateCard/DateCard";
import React from "react";

const GroceryTable = ({ groceryItems }) => {
	console.log(groceryItems);
	return (
		<>
			<table className="grocery-table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{groceryItems.length === 0 && (
						<tr className="no-item-message">No item added</tr>
					)}
					{groceryItems.map((item) => (
						<tr key={item.id}>
							<td>
								<DateCard
									month={item.date.toLocaleString("en-US", { month: "long" })}
									day={item.date.getDate()}
									year={item.date.getFullYear()}
								/>
							</td>
							<td className="grocery-item grocery-item__name">
								{item.itemName}
							</td>
							<td className="grocery-item grocery-item__price">{item.price}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default GroceryTable;
