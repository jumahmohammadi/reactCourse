import { useState } from "react";
import ComponentB from "./ComponentB";
import { createContext } from "react";

export const TitleContext=createContext();
export const DescriptionContext=createContext();

export default  function ComponentA() {
 const [title,setTitle]=useState("React Course");
 return (
    <div>
        <h1>Component A</h1>
       <DescriptionContext.Provider value="React Crash Course FOr Bigenners"> 
         <TitleContext.Provider   value={title}>
            <ComponentB />
         </TitleContext.Provider> 
        </DescriptionContext.Provider>
    </div>
  )
}

