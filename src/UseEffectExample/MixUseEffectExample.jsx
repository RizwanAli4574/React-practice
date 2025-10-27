import { useState , useEffect } from "react"

function MixUseEffectExample() {
    const [count , setCount] = useState(0);
    const [name , setName] = useState("");

    // without dependency
    useEffect( () =>{
        console.log("without dependency")
    })

    // with empty array
    useEffect( () =>{
        console.log("with empty array")
    } , [])

    // with dependency [count]
    useEffect( () =>{
        console.log("with dependency [count]")
    } , [count])
  return (
    
    <div style={{textAlign: "center" , marginTop : "40px"}}>
        <h1>All useEffect Examples</h1>
        <p>Count : {count}</p>
        <p>Name : {name}</p>

        <button onClick={()=>setCount(count + 1)}>Increase</button>
            <input type="text" 
            placeholder="Type Your Name"
            onChange={(e)=> setName(e.target.value)}
            />
    </div>
   
  )
}

export default MixUseEffectExample