import { useState } from "react";
import ComponentB from "./ComponentB";
import { createContext } from "react";

export const titleContext = createContext();
export default function ComponentA() {
  const [title,setTitle]=useState("React Course");  
  return (
    <div>
        <titleContext.Provider value={title}>
            <h1>Component A</h1>
            <ComponentB /> 
        </titleContext.Provider>
    </div>
  )
}
