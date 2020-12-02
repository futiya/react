import React,{createContext,useContext, useState} from "react"
import data from "./normal/components/data"
const ColorContext = createContext();

export const useColors=()=>useContext(ColorContext)

export default function ColorProvider({children}){
    const [colors,setColors]= useState(data);
    console.log("-----", colors);
    const addColor = (title,color)=>{
        console.log("add new color"+title+" "+color)
        const newColors = [
            {
                id:Math.rating,
                rating:0,
                title:title,
                color:color
      
              },
              ...colors,
        ]
        setColors(newColors)
    };
    const removeColor = (id)=>{
        const newColors = colors.filter((c)=>(c.id!==id));
        setColors(newColors);
    };
    const rateColor = (id,rating)=>{
        alert(id+"-------"+rating)
        const newColors= colors.map((c)=>
            c.id!==id
            ?c
            :{
            ...c,
            rating
        }
        )
        setColors(newColors);
    };
        return (
            <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor}}>
              {children}
            </ColorContext.Provider>
          );
}