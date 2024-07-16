import { Link, Outlet } from "react-router-dom";
const About=()=>{
    return(
       <>
         <h1>About page</h1>
         <h2>Welcome to about page discription</h2>
         <div style={{display:"flex"}}>
            <div>
                <Link to="aboutCompany">About Company</Link>
                <br /><br />
                <Link to="aboutProduct">About Products</Link>
                <br/><br/>
                <Link to="aboutService">About Services</Link>
                <br /><br />
            </div>
            <div>
                <Outlet/>
            </div>
         </div>
       </>
    )
}
export default About;