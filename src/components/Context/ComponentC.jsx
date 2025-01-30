import { useContext } from "react"
import { titleContext } from "./ComponentA"
export default function ComponentC() {
  const title= useContext(titleContext)
  return (
    <div>
        <h3>Component C</h3>
        <h1>Welcome to <ins>{title}</ins> </h1>
    </div>
  )
}
