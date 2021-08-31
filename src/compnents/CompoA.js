
import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import './style.css' 


export const CompoA = () => {
   
const [name , setname] = useState([])

const [data , setdata] = useState('')


    function handle (event){
        setdata(event.target.value) }

        
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(x=>setname(x.data))
    },[])


const fun =()=>{
    axios.post('https://jsonplaceholder.typicode.com/users',{name:data}).then(x=>console.log(x.data))}

    return (
        <div >
        <div id='container' >
        <div id='head' >DIGIKULL STUDENTS</div>
        <div><input onChange={handle} placeholder="ENTER YOUR NAME HERE" /><button onClick={fun} >ADD</button></div>
       <div> { name.map((item,index)=>{return <div id='lines' key = {index}> {item.name}</div>})}</div>
        </div>
        </div>
    )
}
