import { useSearchParams } from "react-router-dom"


export default function Search() {
  const [searchParam,setSearchParam]=useSearchParams();
  
  return (
    <div>
        <input type="text" placeholder="Search Posts" onBlur={(e)=>setSearchParam({'qry':e.target.value})}/>
        <h1>Search Component <mark>{searchParam.get('qry')}</mark> </h1>

    </div>
  )
}
