const Cars = () => {
	const carBrands = ["Toyota", "Nissan", "Volvo", "Mercedes", "Tesla"];
	const paragraphOfCars = carBrands.map((car, index) => (
		<p key={index}>{car}</p>
	));
	return <div>{paragraphOfCars}</div>;
};
export default Cars;
