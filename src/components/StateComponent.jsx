import {useState} from 'react';
 

function StateComponent(){
	const [name,setName]=useState("Ali");
	const [counter,setCounter]=useState(0);
	const [incrementBy,setIncrementBy]=useState(1);
	
	
	function changeName(){
		setName("Ahmad")
	}
	
	return (
	    <div>
		   <h1>{name}</h1>
		   <button onClick={changeName}>change name</button>
		   <h3>Welcome {name}</h3>
		   <hr />
		   <br />
		   <br />
		   
		   
		 
		   <h1> the counter value is {counter}</h1>
		   <button onClick={()=>setCounter(counter+incrementBy)}>Increase</button>
		   <button onClick={()=>setCounter(counter-incrementBy)}>Decrease</button>
		   <hr />
		   <br />
		   <br />
		   
		   
		   <h1>Increment/Decrement By {incrementBy}</h1>
		   <select style={{width:'120px'}}   value={incrementBy}  onChange={(e)=>setIncrementBy(Number(e.target.value))}>
		     <option value="1">1</option>
		     <option value="2">2</option>
		     <option value="3">3</option>
		     <option value="4">4</option>
		     <option value="5">5</option>
		   </select>
		   
	    </div>
	)
}

export default StateComponent; 