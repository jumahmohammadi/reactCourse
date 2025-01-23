import { Link,Outlet } from "react-router-dom";

function Blog(){
    return(
        <>
           <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, quas voluptas perferendis officia odit labore aperiam deleniti dolor amet ea beatae distinctio debitis est neque minus? Et necessitatibus aliquam possimus explicabo aut aspernatur molestias blanditiis, repellendus ipsum nesciunt porro, libero dolor distinctio? Consequuntur dolores dolor voluptatum iste ex non repellendus, nostrum corporis minima amet possimus eveniet cumque sapiente quis repellat hic esse odio maiores odit debitis, laudantium deleniti pariatur! Impedit beatae odio ut ab soluta quo quos velit optio vel voluptate deleniti, porro, fugiat, debitis consequuntur at. Optio quis sit tempora voluptatem velit voluptatibus dignissimos laudantium dicta quidem, magni deleniti!
           </div>
           <div>
              <Link to="recents">Recent Posts</Link>
              <Link to="most-visited">Most Visited Posts</Link>
           </div>
           <div>
              <Outlet />
           </div>
        </>
    )
}
export default Blog;