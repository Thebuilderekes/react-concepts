import { createContext, useState } from "react";
import Level2 from "./Level2";

const AuthContext = createContext();
const authStateInitial = { user: "Ekeopre", login: true };
function Level3() {
	const [authState, setAuthState] = useState(authStateInitial);
	return (
		<div>
			<h1>level 3</h1>

			<AuthContext.Provider value={[authState, setAuthState]}>
				<Level2 />
			</AuthContext.Provider>
		</div>
	);
}

export default Level3;
export { AuthContext };

/*
* useContext and useContext provider is a way to allow for props and state to be passed accross the app in order to avoid massive props drilling between components. In the above component, using the provider, we have passes authState value to Level2 component by wrapping it in the AuthContext.Provider

* In situattion where you want to be able to change the state while using useContext, you can use useState.

*/
