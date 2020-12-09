import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import {  Component, useState } from 'react';
import Star from './lesson4-style/Star';
import StarRating from './lesson4-style/StarRating';
import Colors from './lesson4-style/Colors';
import ColorList from './lesson4-style/ColorList';
import Children from './lesson4-style/Children'
import Example from './lesson4-style/Click';
import AddColorForm from './lesson4-style/AddColorForm'
import AddColorFormNew from './lesson4-style/AddColorFormNew'
import data from './lesson4-style/data'
//import './lesson4-style/styles/App.css'
//import styles from "./lesson4-style/styles/App.module.css"
import styled from "styled-components";
//@import "./lesson4-style/styles/App.sass"
import logo192 from "./lesson4-style/assets/logo192.png"
const StyleContainer = styled.div`
width: 400px;
    widows: 400px;
    margin: auto;
    padding: 20px;
    background-color: pink;
    text-align: center;
`
export default class App extends Component{
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
        
           /* <div className={styles.container}> */ 
          <StyleContainer>
          <div>
            <Logo></Logo>
            <img src={logo192} alt="logo"></img>
          <AddColorForm  onNewColor={addColor}/>
          <ColorList colors={colors} onRate={rateColor} onRemove={remove}></ColorList>
        </div>
        </StyleContainer>
      // <Children>
      //   <p>h1</p>
      //   <h2>header</h2>
      // </Children>
      // <Example></Example>
       )
    }}