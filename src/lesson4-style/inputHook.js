import {useState} from "react"
export const  UserInput = (initValue)=>
    {
        const [value,setValue]=useState(initValue)
        return [
            {
                value,
                onChange:(e)=>(setValue(e.target.value))
            },
            ()=>setValue(initValue)
        ]
    }
