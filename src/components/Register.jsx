import {useState} from 'react';

function Register(){
	const [formData,setFormData]=useState({firstname:'',lastname:'',age:''});
	
	console.log(formData)
	
	return (
	   <>
	      <form>
		  {console.log(formData)}
		     Firstname : <input name="firstname" value={formData.firstname}  onChange={((e)=>setFormData({...formData, firstname:e.target.value}) )} /><br/>
		     Lastname : <input name="lastname" value={formData.lastname}     onChange={((e)=>setFormData({...formData, lastname:e.target.value}) )} /><br/>
		     Age : <input name="age" value={formData.age} onChange={((e)=>setFormData({...formData, age:e.target.value}) )} /><br/>
			 <button>Save</button>
	      </form>
	   </>
	)
}

export default Register; 

