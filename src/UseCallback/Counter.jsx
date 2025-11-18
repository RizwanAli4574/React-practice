import { useState , useCallback } from "react";

export default function Counter(){
    const [count ,setCount] = useState(0)

    const increment = useCallback( () =>{
        setCount( (prev) => prev + 1)
    },[])

return (
    <>
     <h2>Count : {count}</h2>
     <br/>
     <button onClick={increment}>Increament</button>
    </>
)

}