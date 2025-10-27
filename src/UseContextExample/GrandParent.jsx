import Parent from "./Parent"
import { UserContext } from "./UserContext"

function GrandParent() {
    const user = "Rizwan Ali"
  return (
    <UserContext.Provider value={user}>
    <div>
        <h1>Grand Parent Component</h1>
        < Parent />
    </div>
    </UserContext.Provider>
  )
}

export default GrandParent