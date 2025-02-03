import { useState } from "react";

function useCounter(initailValue=0){
   const[count,setCount]=useState(initailValue)

   const increment=()=>{
    setCount(count+1)
   }

   const decrement=()=>{
    setCount(count-1)
   }


   const reset=()=>{
      setCount(initailValue)
   }

   return {count,increment,decrement,reset};
}

export default useCounter;