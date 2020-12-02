import { useColors } from "../ColorProvider";
import Colors from "./Colors"
import { Component } from "react";
const ColorList= ()=>{
    const {colors} = useColors();
    console.log("colors..."+colors)
    return (
        <div>
            {colors.length===0?(
                <p>No Colors listed. (Add a Color )</p>
            ):(colors.map((c)=>(
                <Colors 
                key={c.id}
                {...c}
                 />
            ))
            )}
        </div>
        );
}
export default  ColorList;