import React, { useReducer, useState } from 'react'

export default function Reducer() {
//    const [counter,setCounter]=useState(0);
function reducer(state,action){
   switch(action){
      case "increment":
        return state +1; 
        break;
     case "decrement":
        return state-1; 
        break;
    case "reset":
        return 0;
        break;
    default:
        return state;            
   }
}


const [counter,setCounter]=useReducer(reducer,0);
  return (
    <div>
        <h1>you have clicked {counter} times</h1>
        <button onClick={()=>setCounter("increment")}> increment </button>
        <button onClick={()=>setCounter("decrement")}> decrement </button>
        <button onClick={()=>setCounter("reset")}> reset </button>
    </div>
  )
}
