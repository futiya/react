import React,{useState} from "react"
import {UserInput} from "./inputHook"
export default function AddColorFormNew({onNewColor= f=>f}){
     const [titleProps,resetTitle] = UserInput("")
     const [colorProps,resetColor] = UserInput("")
    const submit = e=>{
        e.preventDefault()
        onNewColor(titleProps.value, colorProps.value)
        resetColor("")
        resetTitle("")
    }
    return (
        <form onSubmit={submit}>
            <input
             {...titleProps}
             type="text"
             placeholder="color title"
             required
             >
            </input>
            <input
               {...colorProps}
                type="color"
                required
                >
            </input>
            <button>Add</button>
        </form>
    )
}