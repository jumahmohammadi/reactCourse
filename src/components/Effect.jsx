import { useEffect,useState } from "react"

export default function Effect() {
  const [counter,setCounter]=useState(0);
  const [name,setName]=useState("");
  
//   useEffect(function(){
//      console.log("Component mounted");
//   },[name])
     
     useEffect(function(){
         console.log("Component mounted");

         return ()=>{
            console.log("component unmount")
         }
      },[])

  return (
    <div>
        <div>Hello {name}</div>
        <button onClick={()=>setCounter(counter+1)}>you clicked {counter} times</button>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}
