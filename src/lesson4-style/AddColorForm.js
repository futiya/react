import React,{useState} from "react"
//import './styles/App.css'
import styles from "./styles/App.module.css"
export default function AddColorForm({onNewColor= f=>f}){
    const [title,setTitle] =useState("")
    const [color,setColor] =useState("")
    const submit = e=>{
        e.preventDefault()
        onNewColor(title, color)
        setTitle("")
        setColor("")
    }
    return (
        <form onSubmit={submit} className={styles.form}>
            <input className={styles.input}
             value={title}
             onChange={e=> setTitle(e.target.value)}
             type="text"
             placeholder="color title"
             required
             >
            </input>
            <input className={styles.input}
                value={color}
                onChange={e=>setColor(e.target.value)}
                type="color"
                required
                >
            </input>
            {/* <button className={styles.button}>Add</button> */}
            <button className={`${styles.button} ${styles.button_large}`}>Add</button>
        </form>
    )
}