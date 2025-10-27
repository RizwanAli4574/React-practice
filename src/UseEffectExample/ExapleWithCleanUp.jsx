import { useState , useEffect } from "react"

function ExapleWithCleanUp() {
    const [count , setCount] = useState(0)

    useEffect( () =>{
        console.log("Timer Start")
       const timer =  setInterval( () => {
            setCount(prevCount => prevCount + 1)
        } , 1000)

        return () =>{
            clearInterval(timer)
            console.log("Timmer Stoped")
        };
    },[])
  return (
    <div>
        <h1>Count : {count}</h1>
        <p>Timer Cleanup example running...</p>
    </div>
  )
}

export default ExapleWithCleanUp