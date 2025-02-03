import React from 'react'
import useCounter from './useCounter'

export default function Customhook() {
   const {count,increment,decrement,reset}=useCounter() 
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>increment()}>increment</button>
        <button onClick={()=>decrement()}>decrement</button>
        <button onClick={()=>reset()}>reset</button>
    </div>
  )
}

