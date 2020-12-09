import React, {useState,useEffect} from "react";

function Checkbox(){
    const [checked, setChecked] = useState(false);
    useEffect(()=>
        {
            alert(`checked:${checked}`)
        }
    );
  
    return(
        <div>
            <input
                type="checkbox"
                value={checked}
                onChange={()=>(setChecked(checked=>!checked))}
                />
                    {checked ? "checked":"unchecked"}
            
        </div>
    )
}

function Phase(){
    const [val,setVal]=useState("")
    const [phase,setPhase]=useState("Example")
    const createPhase = ()=>{
        setPhase(val)
        setVal("")
    }
    useEffect(()=>{
        console.log(`type ${val}`)
    },[val])
    useEffect(()=>{
        console.log(`save phrase ${phase}`)
    },[phase])
    return <div>
        <label>My Phase</label>
        <input
            value={val}
            placeholder={phase}
            onChange={(e)=>setVal(e.target.value)}
        />
        <button onClick={createPhase}>send</button>
    </div>
}
export default function App(){
    return <Phase></Phase>;
}