import "./grocery.css";
import DateCard from "../DateCard/DateCard";
import Form from "../Form/Form";

const GroceryTable = ({ groceryItems }) => {
	return (
		<>
			<Form groceryItems={groceryItems} />
			<table className="grocery-table" border="1">
				<thead>
					<tr>
						<th>Date</th>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{groceryItems.map((item) => (
						<tr key={item.id}>
							<td>
								<DateCard
									month={item.date.toLocaleString("en-US", { month: "long" })}
									year={item.date.getFullYear()}
									day={item.date.getDate()}
								/>
							</td>
							<td className="grocery-item grocery-item__name">{item.name}</td>
							<td className="grocery-item grocery-item__price">{item.price}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default GroceryTable;
