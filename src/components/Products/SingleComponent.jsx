import axios from "axios";
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
export default function SingleComponent() {
    const urlparams=useParams();
    const id= urlparams.product_id;

    const [product,setProduct]=useState([]);

    useEffect(function(){
       axios.get('https://dummyjson.com/product/'+id)
       .then((result)=>setProduct(result.data))
       .catch((err)=>console.log(err));
    },[]);

    return (
    <div>
     <h1>{product.title}</h1>
     <img src={product.thumbnail} alt="" />
     <p>{product.description}</p>
     <hr />
       {product.images?.map((image)=>
        (
                <img src={image} alt="" style={{width:'220px'}} />
        )
       )}


       <ul>
        <li>Width: {product.dimensions?product.dimensions.width:''}</li>
        <li>Height: {product.dimensions?product.dimensions.height:''}</li>
        <li>Depth: {product.dimensions?product.dimensions.depth:''}</li>
       </ul>

        <h1>Reviews</h1>
       {product.reviews?.map(review=>(
        <div>
            <h3>{review.reviewerName}</h3>
            <p>{review.comment}</p>
         
        </div>
       ))}
    </div>
  )
}
