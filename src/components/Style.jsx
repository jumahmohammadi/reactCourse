import './style.css';
import mystyle from './mystyle.module.css';
import mystyle2 from './mystyle2.module.css';


function Style (){
	var titleStyle={
		color:'blue',
		backgroundColor:'gray',
		fontSize:'3rem',
		borderBottom:'3px solid orange'
	};
	return (
	   <div>
	       <h1 style={{color:'orange',backgroundColor:'brown',fontSize:'4rem'}} >Style Component</h1>
	       <h1 style={titleStyle} >Style2 </h1>
		   <div className="banner">Banner</div>
		   <section className={mystyle.section}></section>
	   </div>
	)
	
}
export default Style;