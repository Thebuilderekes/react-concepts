## what is happening in the example component

## Imports

The code starts by importing the `useState` and `useEffect` hooks from React. These hooks are used to manage state and side effects in React components.

## Component Definition

The next line exports a default component named `Example`. This component is the one that will be rendered when the code is executed.

## State Management

Inside the `Example` component, we use the `useState` hook to manage the state of the component. The state consists of a single variable, `data`, which is initialized to `null`.

## Side Effect Management

We then use the `useEffect` hook to fetch data from the PokéAPI. The `useEffect` hook is used to perform side effects in React components. Side effects are actions that can affect the outside world, such as fetching data or making changes to the DOM.

The `useEffect` callback function is asynchronous, meaning that it can return a promise. In this case, the callback function returns the `fetchData` function. The `fetchData` function is also asynchronous, and it returns a promise that resolves to the fetched data.

The `useEffect` callback function is called when the component is mounted and whenever any of its dependencies change. In this case, the `useEffect` callback function has no dependencies, so it is only called once, when the component is mounted.

Once the `fetchData` function has finished fetching the data, the `setData` function is called to set the `data` state to the fetched data.

## Cleanup

The `useEffect` callback function can also return a function to be executed when the component is unmounted. This function can be used to clean up any resources that were created in the `useEffect` callback function.

In this case, the `useEffect` callback function returns a function that does nothing. This is because there are no resources to clean up.

## Rendering

The `Example` component returns a `div` element that renders the name of the Pokémon, if the data has been fetched successfully. Otherwise, the `div` element renders nothing.





## Key points of data fetching in react
A promise is returned from fetch

use ? after the variable to watch it's value in the mean time while it is being fetched inside the useEffect. 
see `data` in the `Example` component.  `data?` was used to watch the value of data and this prevented errors like being set to null after the 
useEffect ran.
