import "./dateCard.css";

export default function DateCard({ month, year, day }) {
	return (
		<div className="card">
			<div className="card-body">
				<h3 className="card-body__month">{month}</h3>
				<h3 className="card-body__day">{day}</h3>
				<h3 className="card-body__year">{year}</h3>
			</div>
		</div>
	);
}
