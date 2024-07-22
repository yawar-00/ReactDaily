import { useState } from "react";
import axios from "axios";



const Insert=()=>{
    const [input,setInput]=useState({})
  
    const handleInput=(e)=>{
      let name =e.target.name;
      let value=e.target.value;
      setInput((values)=>({...values ,[name]:value}))
      console.log(input);
    }
    const handleSubmit=()=>{
      let api="http://localhost:3000/student"
      axios.post(api, input).then((res)=>{
        console.log(res);
        alert("data save !!")
      })
    }
    return(
      <>
        Enter rollno : <input type="text" vlaue={input.rollno} name="rollno" onChange={handleInput} />
        <br />
        Enter name : <input type="text" vlaue={input.name} name="name" onChange={handleInput} />
        <br />
        Enter city : <input type="text" vlaue={input.city} name="city" onChange={handleInput} />
        <br />
        Enter fees : <input type="text" vlaue={input.fees} name="fees" onChange={handleInput} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </>
    )
}
export default Insert