



// const myName = (yourname) => {
// return yourname
// }

// const handleClick = () => {
//     alert("Click Ho gya")
// }
// const handleInput = (event) =>{
// console.clear()
// console.log("value :" , event.target.value)
// }

// const handleMouseOver = () => console.log("Mouse Over")

// const handleDoubleClick = () => console.log("Double Click")


// const name = "Rizwan Ali"
// const name1 = "waqar Ali"

// return (

//     <>
//     <h1>Hello {myName(name)}</h1>
//     <h2>Hello {myName(name1)}</h2>

//     <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

//     <button onClick={handleClick}>Click Me</button>
//     <button onClick={()=>{alert("Hello")}}>Say Hello</button>
//     <br />
//     <input type="text"  onChange={handleInput} placeholder="Type something"/>
//     </>
// )

function Hello(){

const fruits = ["Apple" , "Banana", "Orange"]

return (

    <>
    <h2>Fruit List</h2>
    <ul>
        {fruits.map((fruit, index) => (
            <li>{index} - {fruit}</li>

        ))}
    </ul>
    </>
)

}

export default Hello