import { useState, useEffect } from "react";


export default function Section() {
	  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
   }, 1000)

  console.log("section re-rendered")
      return () => clearInterval(interval)
  }, []);

   
  return (
    <div>
      <h2>Time on page: {seconds} seconds</h2>
    </div>
  );
}
