import React from 'react'

 function Button({action,children}) {
    console.log(children)
  return (
    <div>
        <button onClick={()=>action()}>{children}</button>
    </div>
  )
}

export default React.memo(Button)