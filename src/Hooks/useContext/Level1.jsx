import { useContext } from "react";
import { AuthContext } from "./Level3";
function Level1() {
	const authContext = useContext(AuthContext);
	console.log("value of authcontext", authContext);
	function add() {
		authContext["age"] = 32;
		console.log(authContext);
	}

	return (
		<div>
			<h3>Level 1</h3>
			<button onClick={add}>add context</button>
			<p>{JSON.stringify(authContext, null, 2)}</p>
		</div>
	);
}

export default Level1;
