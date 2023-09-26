import "../financeApp/expenseItem.css";

export default function Data(props) {
	return (
		<div>
			<div className="expense-item">
				<h2>{props.name}</h2>
				<h2>{props.date}</h2>
				<h2 className="expense-item__price ">{props.price}</h2>
			</div>
		</div>
	);
}
z;
