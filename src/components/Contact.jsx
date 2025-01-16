import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
function Contact(){

    var students=["Karim","Hussain","Mohammad","Hassan"];
	
	var students_info=[
	      {"id":1,"name":"Ali","LastName":"Ahmadi","score":18},
	      {"id":2,"name":"Ahmad","LastName":"Hassani","score":15},
	      {"id":3,"name":"Mohammad","LastName":"Karimi","score":20},
	      {"id":4,"name":"Mohammad","LastName":"Karimi","score":19},
	      {"id":5,"name":"Mohammad","LastName":"Karimi","score":14},
	      {"id":6,"name":"Mohammad","LastName":"Karimi","score":20}
		];
	
	
	return (
	    <div>
		  <Header pageTitle="Contact us" pageLink="/contact" />
		  <Sidebar studentNames={students}   studentsInfo={students_info}/>
		   
			<br />
			<br />
			<br />
		  <h2>Contact page </h2>
		</div> 
	)
} 

export default Contact;