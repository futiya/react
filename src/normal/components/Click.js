import {useState, useEffect } from "react"

export default function Example(){
    const [count, setCount]=useState(0)
    useEffect(() => {
        alert("hello")
    })
    return (
        <div>
            <p>you have clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}