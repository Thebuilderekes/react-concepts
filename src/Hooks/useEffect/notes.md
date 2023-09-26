## Things to consider when using useEfffect

Don't forget to use the clean up fuction whenever it is necessary

```useEffect(() => {
		const myInterval = setInterval(() => {
			console.log("interval says hello");
		}, 1000);

		return () => clearInterval(myInterval);
        // this is the cleanup function. This code runs every one second and only on mount of the component.
	}, []);

```
