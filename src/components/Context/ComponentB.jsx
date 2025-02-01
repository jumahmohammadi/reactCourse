import ComponentC from "./ComponentC";
import { useContext } from "react";
import  {DescriptionContext} from "./ComponentA";

export default function ComponentB() {
 const description=useContext(DescriptionContext)
  return (
    <div>
   
        <h2>Component B</h2>
        <p>{description}</p>
        <ComponentC />
        
    </div>
  )
}
