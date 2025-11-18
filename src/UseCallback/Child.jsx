import React  from "react";

 function Child({click}){
 console.log("Child Rerender")
return (
    <>
     <button onClick={click}>Child Button</button>
    </>
)

}

export default React.memo(Child)