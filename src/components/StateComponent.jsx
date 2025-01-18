import {useState} from 'react';

function StateComponent(){
    const [name,setName]=useState('Ali');
	function changeName(){
		setName('Ahmad');
	}
	return (
	    <div>
		     <h1>Hello {name}</h1>
			 <button onClick={changeName}>Change Name</button>
	    </div>
	)
}

export default StateComponent; 