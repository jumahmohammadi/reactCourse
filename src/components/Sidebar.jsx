function Sidebar(props){
	console.log(props.studentNames)
	function showMessage1(){
		console.log('Hello React 1')
	}
	function showMessage2(){
		console.log('Hello React 2')
	}
	function showMessage3(p){
		console.log('Hello React 3 '+p)
	}
	return (
	   <>
	     <h1>Sidebar</h1>
		 <ul>
		   {props.studentNames.map((sname)=>   (<li key={sname}>{sname}</li>) )}
		 </ul>  
		 
		 <hr />
		 <ul>
		   {props.studentsInfo.map( (student)=> 
		    
		     (student.score>=18) ? <li key={student.id}>{student.id} - {student.name} {student.LastName} = {student.score}</li> :""
			  
			 )} 
		 </ul>
		
		 <button onClick={showMessage1()}>show message 1</button>
		 <button onClick={showMessage2}>show message 2</button>
		 <button onClick={()=> showMessage3('Parameter variable')}>show message 3</button>
	   </>
	)
	
	
		
}
export default Sidebar
