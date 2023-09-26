import { useEffect, useState } from "react";

export default function TryEffect() {
	const [counter, setCounter] = useState(0);
	function handleClick() {
		setCounter(counter + 1);
	}

	useEffect(() => {
		console.log("hello");
	});
	// this is a way to run useEfeect using a dependency array, This would run on as soon as the component is mounted
	// useEffect(() => {
	// 	console.log("hello");
	// }, [counter]);
	return (
		<div>
			<p>{counter}</p>
			<button onClick={handleClick}>run code</button>
		</div>
	);
}

/** 
 * *
//there is a way to run code effects when the code mounts and this is by including the [] dependency array when using useEffect.
 * * //Another way is to run code effects when the component is updated, this is done without including the dependency array when using useEffect
 * * // The last way is to watch the state of variables in the dependency array to watch the variable state and run whenever there is a change in the state of that variable. so [counter] can be watched by useEffect in its dependecy array and run according to the state of counter.



 *!useEffect beghaviou in dev mode 
 ** There is a behaviour in the browseron dev mode where the usEffect runs at least once on mount because it is in dev mode. This is not the case in production 


 *! Cleanup function 
 * * // We can also return a function in useEffect called a cleanup function that will be ran after the component unmounts.
 
  * * // useEffect(() => {
  * * //   first
  * * //  return () => {
  * * //     console.log("hello cleanup")  where this is the cleanup function
 * * // }, [third])
 * 
 * 
 ** cleanup function always runs to cleanup the previous useEffect before it runs the first code in it. In the case above the console.log will run before he first code will run dependency array code in 
     
*/
