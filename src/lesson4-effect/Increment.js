
import React, {useReducer} from "react";

function Increment(){
    const [number, setNumer] = useReducer((number,newNumber)=>(number+newNumber), 0);
    return  (<h1 onClick={()=>setNumer(1)}>
    {number}
    </h1>) ;
    
}

export default function App(){
    return <Increment/>
}