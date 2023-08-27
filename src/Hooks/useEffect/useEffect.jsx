import { useEffect, useState } from "react";

export default function TryEffect() {
	const [counter, setCounter] = useState(0);
	function handleClick() {
		setCounter(counter + 1);
	}

	useEffect(() => {
		console.log("hello");
	});
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
 * * //Another way is to run code effects when the component is updated, this is done without including the dependecy array when using useEffect
 * * // The last way is to watch the state of variables in the dependency array to watch the variable state and run whenever there is a change in the state of that variable. so [counter] can be watched by useEffect in its dependecy array and run accoundingto the satte of counter.



 *!useEffect beghaviou in dev mode 
 ** There is a behaviour in the browseron dev mode where the usEffect runs at least once on mount because it is in dev mode. This is not the case in production 


 *! Cleanup function 
 * * // We can also return a function in useEffect called a cleanup function that will be ran after the component unmounts.
 
  * * // useEffect(() => {
  * * //   first
  * * //  return () => {
  * * //     second  where this is the cleanup function
 * * // }, [third])
 * 
 * 
 ** cleanup function always runs to cleanup the previous useEffect before it runs the first code in it.
     
*/
