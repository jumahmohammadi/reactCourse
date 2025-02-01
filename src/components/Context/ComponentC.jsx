import { useContext } from "react"
import { TitleContext } from "./ComponentA"

export default function ComponentC() {

  const title= useContext(TitleContext)
  return (
    <div>
        <h3>Component C</h3>
        <h1>Welcome to <ins>{title}</ins> </h1>
    </div>
  )
}
