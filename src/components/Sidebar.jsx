function Sidebar(props){
	console.log(props.studentNames)
	return (
	   <>
	     <h1>Sidebar</h1>
		   {props.studentNames.map((sname)=>   (<p key={sname}>{sname}</p>) )}
	   </>
	)
}
export default Sidebar
