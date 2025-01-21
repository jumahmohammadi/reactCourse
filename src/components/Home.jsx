import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

function Home(){
	var name="Ali";
	var lastname="Ahmadi";
	function welcome(){
		return "Weblocme to react course 1";
	}
	
	var students=["Ali","Ahmad","Mohammad","Hassan"];
	return (
	    <div>
		  <Header pageTitle="Home" pageLink="/home" />
          <Sidebar studentNames={students} />
		     
		  <br />
		  <br />
		  <br />
		  <br />
	      <h2>Hello  {name} {lastname} </h2> 
	      <h3>{welcome()}</h3> 
		</div> 
	)
} 

export default Home;