import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react"
import "./style.css";

export default function Products() {
    const [products,setProducts]=useState([]);
    const [limit,setLimit] = useState(8);

    useEffect(function(){
       axios.get('https://dummyjson.com/products?limit='+limit)
       .then((result)=>setProducts(result.data.products))
       .catch((err)=>console.log(err));
    },[limit]);


  return (
    <div>
        <h2>Products</h2>
        <div className="product-list">
            
            {products.map((product)=> (
                <div className="product-item" key={product.id}>
                    <img src={product.thumbnail} alt="" />
                    <h2><Link to={'/product/'+product.id}>{product.title}</Link></h2>
                    <h4>{product.price}</h4>
                </div>
            ) )}
        </div>
        <button onClick={()=>setLimit(limit+4)}>Load More</button>
    </div>
  )
}
