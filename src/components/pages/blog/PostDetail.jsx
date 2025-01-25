import { useParams } from "react-router-dom"

export default function PostDetail() {
   const params=useParams();
   const postid=params.post_id;
  return (
    <div>
        <h1>Post Detail </h1>
        <h2>Post Id {postid}</h2>

    </div>
  )
}
