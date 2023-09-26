import { useState, useEffect} from "react";
import Section from "./Section";


export default function Home() {
	const [visits, setCounter] = useState(1);
useEffect(() => {
  console.log("Home has re-rendered")
    
}, []) 
	return (
		<div>
			<h1>visits : {visits}</h1>
			<button onClick={() => setCounter(visits + 1)}>+</button>
    <Section/> 
		</div>
	);
}
