import Data from "../financeApp/ExpenseData";

const currency = "$";

function ExpenseItemList() {
	return (
		<>
			<Data name="car insurance" date="today" price={currency + 200} />
			<Data name="car insurance" date="today" price={currency + 200} />
			<Data name="car insurance" date="today" price={currency + 200} />
		</>
	);
}

export default ExpenseItemList;
