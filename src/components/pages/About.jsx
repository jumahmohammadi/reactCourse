import { useNavigate } from "react-router-dom";

function About (){
    const nav=useNavigate();
    function confirmMessage(){
        var conf=confirm("are you sure to delete this page?")
        conf ? nav('/') : "";
    }
    return(
        <div>
            <h1>About Us</h1>
            <button onClick={confirmMessage}>Delete</button>
        </div>
    )
}
export default About;