import { useState , useEffect } from "react"

function MoreUEExample() {
    const [user , setUser] = useState(null)
    const [count , setCount] = useState(0)


    // 1️⃣ API call — runs once on mount
    useEffect( () =>{
        console.log("Fecthing user")
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then( (res) => res.json())
        .then( (data) => setUser(data));
    },[])

  // 2️⃣ Title update — runs when count changes
  useEffect( () => {
    document.title = `Clicked ${count} times`;
    console.log("Times Updated")
  }, [count])

   // 3️⃣ Always log render — runs on every render
   useEffect( () => {
    console.log('Render Again')
   })
  return (
    <div style={{textAlign : "center" , marginTop : "40px"} }>
        <h1>User Data Example</h1>
        { user ? (
            <p>
                <strong>Name : </strong> {user.name}
            </p>
        ) : (
            <p>
                Loading user ...
            </p>
        )
        }

        <h2>Count : {count}</h2>
        <button onClick={ () => setCount(count + 1)}>Increase</button>

    </div>
  )
}

export default MoreUEExample