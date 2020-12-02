import logo from './logo.svg';
import './App.css';
import {  Component, useState } from 'react';
import Star from './normal/components/Star';
import StarRating from './normal/components/StarRating';
import Colors from './normal/components/Colors';
import ColorList from './normal/components/ColorList';
import Children from './normal/components/Children'
import Example from './normal/components/Click';
import AddColorForm from './normal/components/AddColorForm'
import AddColorFormNew from './normal/components/AddColorFormNew'
import data from './normal/components/data'
export default function App(){
    const [colors,setColors] = useState(data);
    const addColor =(title,color)=>{
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
    }
    const rateColor = (id,rating)=>{
    alert(rating)
    const newColors= colors.map((c)=>
        c.id!==id
        ?c
        :{
        ...c,
        rating
    }
    );
        setColors(newColors);
    }

    const remove = (id)=>{
        const newColors = colors.filter((c)=>(c.id!==id));
        setColors(newColors);
    }

    return ( 
        <div>
          <AddColorForm  onNewColor={addColor}/>
          <ColorList colors={colors} onRate={rateColor} onRemove={remove}></ColorList>
        </div>
        
      // <Children>
      //   <p>h1</p>
      //   <h2>header</h2>
      // </Children>
      // <Example></Example>
       );
}

