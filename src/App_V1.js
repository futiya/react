import logo from './logo.svg';
import './App.css';
import {  Component } from 'react';
import Star from './normal/components/Star';
import StarRating from './normal/components/StarRating';
import Colors from './normal/components/Colors';
import ColorList from './normal/components/ColorList';
import Children from './normal/components/Children'
import Example from './normal/components/Click';
import AddColorForm from './normal/components/AddColorForm'
import AddColorFormNew from './normal/components/AddColorFormNew'
export default class App_V1 extends Component{
  constructor(props){
    super(props)
    this.state={
      colors:[
        {
          id:"1",
          color:"Ocean blue",
          title:"test1",
          rating:3
        },
        {
          id:"2",
          color:"pink",
          title:"test2",
          rating:1
        },
        {
          id:"3",
          color:"red",
          title:"test3",
          rating:2
        },
      ]
    };
    this.rateColor =this.rateColor.bind(this);
    this.remove = this.remove.bind(this);
    this.addColor = this.addColor.bind(this);
  }

  remove(id){
    this.setState((prevState)=>({
      colors:prevState.colors.filter((c)=>(c.id!==id))
    }))
  }
  rateColor(id,rating){
    alert(rating)
    this.setState((preState)=>({
        colors:preState.colors.map((c)=>
        
          c.id!==id
          ?c
          :{
            ...c,
            rating
          }
        )
      }
    ))
  }
  addColor(title,color){
    this.setState((preState)=>({
      colors:[
       
        {
          id:Math.rating,
          rating:0,
          title:title,
          color:color

        },
        ...preState.colors,
       
      ]
    })

    )
  }
   render(){
     const {colors} = this.state
     const {rateColor,remove,addColor}= this;
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
     )
  }}