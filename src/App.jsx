
import Hello from "./PropsExamples/Hello"
import Button from './PropsExamples/Button'


function App(){

  const hobbies = ["Reading" , "Coding",  "Traveling"]

  function Message(){
    alert("Hello from message")
  }

  function ByeMessage(){
    alert("Bye from message")
  }

return (
  <>
  <Hello name="Rizwan Ali" age={25} city="Lahore" hobbies={hobbies}/>
  <Button label="Click Me" handleClick={Message}/>
  <br/>
  <br/>
  <Button label="Just Click" handleClick={ByeMessage}/>
  
  </>
)
}


export default App




// import UseReffExample from "./UseReffExample";
// function App() {


//   return (
//     <>
//    < UseReffExample />
//     </>
//   )
// }

// export default App;

