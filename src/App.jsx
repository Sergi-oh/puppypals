import {puppyList} from './data.js'
import { useState } from 'react'
console.log(puppyList);

function App() {
 

  return (
    const [puppies, setPuppies] = useState(puppyList)
      <div>
        { 
   puppies.map((puppy) => {
     return <p>{puppy.name}</p>
   })
}
         </div>
      
  )
}

export default App
