import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
function Contact(){

    var students=["Karim","Hussain","Mohammad","Hassan"];
	
	
	return (
	    <div>
		  <Header pageTitle="Contact us" pageLink="/contact" />
		   <Sidebar studentNames={students}/>
		   
			<br />
			<br />
			<br />
		  <h2>Contact page </h2>
		</div> 
	)
} 

export default Contact;