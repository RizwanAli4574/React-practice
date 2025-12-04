import { useLayoutEffect , useRef } from "react"

function UseLayOut(){

    const chatruf = useRef(null)

useLayoutEffect( () => {
    chatruf.current.scrollTop = chatruf.current.scrollHeight;
} , [])

 return (
   
        <div ref={chatruf} style={{ 
            height: "150px" ,
            width: "200px" ,
            border: "1px solid #ccc" , 
            overflowY: "scroll"}}> 
        <p>Hello</p>
        <p>How are you</p>
        <p>Welcome to chat</p>
        <p>Welcome</p>
        <p>Testing...</p>
        <p>Hello</p>
        <p>How are you</p>
        <p>Welcome to chat</p>
        <p>Welcome</p>
        <p>Testing...</p>
        </div>
        
    
 )
}

export default UseLayOut

// import { useLayoutEffect , useRef } from "react"

// function UseLayOut(){

//     const boxRun = useRef(null)

// useLayoutEffect( () => {
//     const el = boxRun.current

//     const width = el.offsetWidth;

//     el.style.transform = `translateX(${width}px)`
// } , [])

//  return (
   
//         <div ref={boxRun} style={{ padding: "30px" , background: "skyblue" , transition: "3s"}}> 
//         Hello World
//         </div>
        
    
//  )
// }

// export default UseLayOut


// import { useLayoutEffect , useState , useRef } from "react"

// function UseLayOut(){

//     const boxRun = useRef(null)
//     const [height, setheight] = useState(0)

// useLayoutEffect( () => {
//     setheight( boxRun.current.clientHeight)
// } , [])



//  return (
//     <div>
//         <div ref={boxRun} style={{width: "200px" , padding: "20px" , background: "#eee"}}> 
//         Hello World
//         </div>
//         <p>Hieght : {height}</p>
//     </div>
//  )
// }

// export default UseLayOut



// import { useEffect , useLayoutEffect } from "react"

// function UseLayOut(){


// useEffect( () => {
//     console.log("UseEffect Message")
// } , [])

// useLayoutEffect( () => {
//     console.log("UseLayoutEffect Message")
// } , [])



//  return (
//     <div>Test</div>
//  )
// }

// export default UseLayOut