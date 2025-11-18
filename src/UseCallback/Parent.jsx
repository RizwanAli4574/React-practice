import { useState , useCallback } from "react";
import Child from "./Child";

export default function Parent(){
    const [count ,setCount] = useState(0)

    const handleClick = useCallback( () =>{
       console.log("Parent Click")
    },[count])

return (
    <>
     <h2>Count : {count}</h2>
     <br/>
     <button onClick={() => setCount( count + 1)}>Parent Button</button>

     < Child 
     click = {handleClick}
     />
    </>
)

}