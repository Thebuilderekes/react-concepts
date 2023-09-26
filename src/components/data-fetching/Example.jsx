import {useState, useEffect} from 'react'

export default function Example() {
  const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [data, setData] = useState(null)

useEffect(() => {
  
(async function fetchData(){

const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto" );
 try {
if (error){
  setLoading(true)
const dataValue =  await response.json()
console.log(dataValue)
  return setData(dataValue)
}

}catch(error){
 setLoading(false)
   setError(true)
 }

})()

 
}, [])

return (
     <div>
       {loading && `loading...`}
      <p>{!error ? data.name: `there was an error`}</p>
     </div>
)

   
  
}


 
