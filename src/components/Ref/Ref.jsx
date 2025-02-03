import { useEffect, useRef, useState } from "react"

export default function Ref() {
   const inputName = useRef(null);
   const counter = useRef(0);
   const [count,setCount]=useState(0);
   const [name,setName]=useState('')

   useEffect(()=>{
    //    console.log(inputName.current.value)
    //  inputName.current.focus();

    counter.current=counter.current+1;
   })
  return (
    <div>
        <input type="text"  ref={inputName}/>
        <hr />
        <h1>{counter.current}</h1>
        <button onClick={()=>setCount(count+1)}>click here</button>
        <input type="text"  onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}
