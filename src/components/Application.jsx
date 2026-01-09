import { useState } from "react"




function AppTimer(){
    let [count,setcount]=useState(0)
    const Increment=()=>{
    setcount(prev=>prev+1)
    setcount(prev=>prev+1)
    setcount(prev=>prev+1)
    }
    const Decrement=()=>{
        setcount(prev=>prev-1)
    }
    return(
        <>
        <button onClick={Increment}>Increment</button>
        <p>Count:{count}</p>
        <button onClick={Decrement}>Decrement</button>
        </>

    )
}
export default AppTimer
