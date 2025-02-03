import React from 'react'

function Increment({text,value}) {
  console.log(text,value)
  return (
    <div>
        {text +" - " +value}
    </div>
  )
}
export default React.memo(Increment)