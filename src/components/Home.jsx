import Header from './Header.jsx';
function Home(){
	var name="Ali";
	var lastname="Ahmadi";
	function welcome(){
		return "Weblocme to react course 1";
	}
	
	return (
	    <div>
		  <Header pageTitle="Home" />
	      <h2>Hello  {name} {lastname} </h2> 
	      <h3>{welcome()}</h3> 
		</div> 
	)
} 

export default Home;