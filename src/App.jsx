// import EmpData from "./EmpData"
// import EmpDesign from "./EmpDesign"
// const ans=EmpData.map((key)=>{
//   return(<EmpDesign 
//     emp={key.empno} 
//     nm={key.name} 
//     ct={key.city} 
//     sal={key.salary} 
//   />)})



// function App() {
//       return(
//         <>        
//         <h1>React map() function</h1>
//         <table border="1" bgcolor="pink" width="700px">
//           <tr>
//               <th>EMPNO</th>
//               <th>NAME</th>
//               <th>CITY</th>
//               <th>SALARY</th>
//           </tr>
//           {ans}
//         </table>
//         </>
//       )
// }
// import StuData from "./StuData";
// import College from "./College";
// const ans =StuData.map((key)=>{
//   return(
//     <College rno={key.rollno} nm={key.name} ct={key.city} fs={key.fees}/>
//   )
// })
// function App() {
//   return(
//     <>
//     <table border="1" bgcolor="pink" width="600px">
//       <tr>
//         <th>rollno</th>
//         <th>name</th>
//         <th>city</th>
//         <th>fees</th>
//       </tr>
//       {ans}
//     </table>
   
//     </>
//   )
// }
// function App(){
//   return(
//     <>
//       <h1 style={{color:"red",textDecoration:"underline",fontFamily:"arile"}}>Display is blue</h1>
//     </>
//   )
// }
// const box={
//   width:"300px",
//   height:"300px",
//   border:"3px solid red",
//   borderRadius:"15px",
//   backgroundColor:"yellow"
// }
// function App(){
//   return(
//     <>
//       <div style={box}></div>
//     </>
//   )
// }
// const box1={
//   width:"600px",
//   height:"300px",
//   border:"8px solid red",
//   borderRadius:"15px",
//   backgroundColor:"yellow",
//   marginTop:"225px",
//   marginLeft:"450px"
  
// }
// const box2={
//   width:"400px",
//   height:"200px",
//   border:"5px solid navy",
//   borderRadius:"15px",
//   backgroundColor:"pink",
//   margin:"50px 75px"
// }
// const box3={
//   width:"200px",
//   height:"100px",
//   border:"5px solid blue",
//   borderRadius:"15px",
//   backgroundColor:"aqua",
//   margin:"40px 100px"
// }
// function App(){
//   return(
//     <>
//       <div style={box1}>
//         <div style={box2}>
//           <div style={box3}>
//             <h1 style={{color:"red" , textAlign:"center"}}>Cybrom</h1>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// import Cybrom from "./Cybrom"
// function App(){
//   return(
//     <>
//       <Cybrom/>
//     </>
//   )
// }

// import Button from 'react-bootstrap/Button';
// function App(){
//   return(
//     <>
//       <h1>Welcome to Cybrom Bhopal</h1>
//       <h2>hello friends this is my web</h2>
//       <Button variant='primary'>click here!!</Button>
//       <br /><br />
//       <Button variant='danger'>click here!!</Button>
//       <br /><br />
//       <Button variant='warning'>click here!!</Button>
//       <br /><br />
//       <Button variant='success'>click here!!</Button>
//       <br /><br />
//       <Button variant='dark'>click here!!</Button>
//       <br /><br />
//       <Button variant='info'>click here!!</Button>
//       <br /><br />
//       <Button variant='light'>click here!!</Button>
//       <br /><br />
//       <Button variant='secondary'>click here!!</Button>
//       <br /><br />
//       <Button variant='outline-primary'>click here!!</Button>
//       <br /><br />
//       <Button variant='outline-danger'>click here!!</Button>
//       <br /><br />
//       <Button variant='outline-warning'>click here!!</Button>
//       <br /><br />
//       <Button variant='outline-success'>click here!!</Button>
//       <br /><br />
//       <Button variant='outline-dark'>click here!!</Button>
//       <br /><br />
//       <Button variant='outline-info'>click here!!</Button>
//       <br /><br />
//       <Button variant='outline-light'>click here!!</Button>
//       <br /><br />
//       <Button variant='outline-secondary'>click here!!</Button>
//       <br /><br />
//     </>
//   )
// }

// import Alert from 'react-bootstrap/Alert';
// function App(){
//   return(
//     <>
//       <h1>Welcome to Cybrom Bhopal</h1>
//       <h2>hello friends this is my web</h2>
//       <Alert variant="danger" dismissible>
//           This is a danger alert—check it out!
//         </Alert>
//         <Alert variant="warning" dismissible>
//           This is a warning alert—check it out!
//         </Alert>
//         <Alert variant="success" dismissible>
//           This is a success alert—check it out!
//         </Alert>
//         <Alert variant="info" dismissible> 
//           This is a info alert—check it out!
//         </Alert>
//     </>
//   )
// }
// import Accordion from 'react-bootstrap/Accordion';
// function App(){
//   return(
//     <>
//   <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   </>
//   )
// }

// function App(){
//     return(
//         <>
//             <img src="public/images/r1.jpeg"/>
//             <img src="public/images/r2.jpeg"/>
//             <img src="public/images/r3.jpeg"/>
//         </>
//     )
// }
// import Carousel from 'react-bootstrap/Carousel';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function App(){
//     return(
//         <>
//           <Container>
//           <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     <Carousel>
//       <Carousel.Item>
//         <img src="public/images/c1.jpg" style={{width:"100%",height:"500px"}}/>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="public/images/c2.jpg" style={{width:"100%",height:"500px"}}/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="public/images/c3.jpg" style={{width:"100%",height:"500px"}}/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="public/images/crd.jpg" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//           </Container>
//         </>
//     )
// }
// export default App
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function App(){
//   return(
//     <>
//       <Container>
//       <Row>
//         <Col md={2} className='bg-danger p-5'>
//         </Col>
//         <Col md={2} className='bg-warning p-5'>
//         </Col>
//         <Col md={4} className='bg-dark p-5'>
//         </Col>
//         <Col md={4} className='bg-info p-5'>
//         </Col>
//       </Row>
//     </Container>

//     </>
//   )
// }
// export default App;



// // 8/7/2024
// import Container from 'react-bootstrap/Container';
// import TopMenu from './components/TopMenu';
// import TopBanner from './components/TopBanner';
// import PageHeading from './components/PageHeading';
// import HomePageCard from './components/HomePageCard';
// import Footer from './components/Footer';
// import Figures from './components/Figures';
// function App(){
//   return(
//     <>
//       <Container>
//           <TopMenu/>
//           <TopBanner/>
//           <PageHeading/>
//           <HomePageCard/>
//           <Figures/>
//           <Footer/>
//       </Container>
//     </>
//   )
// }
// export default App;
// ================================================
// 9/7/24
// import {Button, message} from 'antd';

// function App(){
//     const display=()=>{
//         message.success("Data Successfully Saved!!");
//     }
//   return(
//     <>
//        <Button type="primary" onClick={display}>Click Me</Button>
//     </>
//   )
// }

// export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./components-rrd/Home";
// import About from "./components-rrd/About";
// import Contact from "./components-rrd/Contact";
// import AboutCompany from "./components-rrd/AboutCompany";
// import AboutProduct from "./components-rrd/AboutProduct";
// import AboutService from "./components-rrd/AboutService";

// function App(){
//   return(
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout/>}>
//               <Route index element={<Home/>}/>
//               <Route path="home" element={<Home/>}/>
//               <Route path="about" element={<About/>}>
//                 <Route index element={<AboutCompany/>}/>
//                 <Route path="aboutCompany" element={<AboutCompany/>}/>
//                 <Route path="aboutProduct" element={<AboutProduct/>}/>
//                 <Route path="aboutService" element={<AboutService/>}/>
//               </Route>
//               <Route path="contact" element={<Contact/>}/>
//             </Route>    

//         </Routes>

//       </BrowserRouter>
//     </>
//   )
// } 
// export default App;


function App(){
    // function display(){
    //   alert("Welcome to our collegee")
    // }
    // const myName=(fnm,snm)=>{
    //     alert("My name is "+fnm+" "+snm)
    // }
    // const myAdd=(n1,n2)=>{
    //     alert(n1+n2)
    // }
    const myName=(nm,e)=>{
        alert("My name is "+nm+" Type : "+e.type)
    }
  return(
    <>
      <h1>Welcome to Cybrom</h1>
       {/* <button onClick={display}>click me!</button>  */}
      {/* <button onClick={()=>{myName("Yawar","Hussain")}}>click me!</button> */}
      
      {/* <button onClick={()=>{myAdd(100,300)}}>click !</button> */}
      <button onClick={(e)=>{myName("Yawar",e)}}>click me!</button>
    </>
  )
}
export default App