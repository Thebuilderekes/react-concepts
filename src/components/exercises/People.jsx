const People = () => {
	const people = [
		{
			name: "John",
			age: 21,
		},

		{
			name: "Cathy",
			age: 51,
		},
		{
			name: "Obi",
			age: 45,
		},
	];
	const peopleDetails = people.map((person, index) => (
		<div key={index}>
			<h1>{person.name}</h1>
			<p>{person.age}</p>
		</div>
	));
	return <div>{peopleDetails}</div>;
};

export default People;
