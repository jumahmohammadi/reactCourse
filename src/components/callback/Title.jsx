import {memo} from 'react'

function Title() {
    console.log("title component")
  return (
    <div>
        <h1>UseCallBack Hook</h1>
    </div>
  )
}

export default memo(Title)