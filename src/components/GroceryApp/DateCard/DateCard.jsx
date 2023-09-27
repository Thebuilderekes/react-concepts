import "./dateCard.css";

export default function DateCard({ month, year, day }) {
	return (
		<div className="card">
			<div className="card-body">
				<p className="card-body__month">{month}</p>
				<p className="card-body__year">{year}</p>
				<p className="card-body__day">{day}</p>
			</div>
		</div>
	);
}
