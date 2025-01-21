 import {useState} from 'react';
 
 function Form (){
	const [fname,setFname] = useState('');
	const [city,setCity] = useState('herat');
	const [detail,setDetail] = useState('');
	
	return (
	   <div>
	    <h1>Form</h1>
		<p> your name is {fname}</p>
		<input name="firstname" value={fname} onChange={(e)=>setFname(e.target.value)}/><br />
		
		<br />
		<br />
		<p> your city is {city}</p>
		<select onChange={(e)=>setCity(e.target.value)} value={city}>
		   <option value="">---</option>
		   <option value="herat">herat</option>
		   <option value="kabul">kabul</option>
		   <option value="mazar">mazar</option>
		</select>
		
		<br />
		<br />
		<p> your detail is {detail}</p>
		<textarea value={detail} onChange={(e)=>setDetail(e.target.value)}></textarea>
		
		
	   </div>
	)
}
export default Form; 
