import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(10)

    function handleAdd() {
        const newCountAdd = count + 1
        setCount(newCountAdd)
    }
    function handleRemove() {
        const newCountRemove = count - 1
        setCount(newCountRemove) 
    }
    return(
        <div style={{border : "2px solid red", padding : "2rem"}}>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button style={{margin : "10px"}} onClick={handleRemove}>Remove</button>
        </div>
    )
    
}