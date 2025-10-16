
import Hello from "./Hello"
import Button from './Button'

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
