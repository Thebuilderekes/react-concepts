As for the state management in Form.jsx, when your state update depends on the value of the previous state use the arrow function to return the spread of the provious state and the new value of what you are changing.

```
setInput(() =>{
return {...prevState, enteredTtile" event.target.value}
})

``
```
