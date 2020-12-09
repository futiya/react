import logo from './logo.svg';
import './App.css';
import {  Component, useState } from 'react';
import Star from './normal/components/Star';
import StarRating from './normal/components/StarRating';
import Colors from './normal/components/Colors';
import ColorList from './lesson3/ColorList';
import Children from './normal/components/Children'
import Example from './normal/components/Click';
import AddColorForm from './lesson3/AddColorForm'
import AddColorFormNew from './normal/components/AddColorFormNew'
import data from './normal/components/data'
export default function App(){
    const [colors,setColors] = useState(data);
     
 
    return ( 
        <div>
          <AddColorForm   />
          <ColorList  ></ColorList>
        </div>
        
      // <Children>
      //   <p>h1</p>
      //   <h2>header</h2>
      // </Children>
      // <Example></Example>
       );
}

