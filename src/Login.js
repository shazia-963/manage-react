import React from "react";

import { useNavigate } from "react-router-dom";
import{ useState } from "react";
// import "./Login";
import "./Login.css";
import  "./EmpList";
// import "./EmpForm";
import "./EmpEdit";
import "./EmpDetails";
import "./Details.css";

function Login() {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const[pswd,setpswd]=useState("")
    const navigate=useNavigate()
    
    const changePswd=(e)=>{
        setpswd(e.target.value)
    }
    const changeUser=(e)=>{
        setUser(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const submitData = () => {
        if (user.length <= 5){
            alert("user should be > 5 characters")
        }
        else if (email !== email) {
            alert("email does not match...")
        }
        else {
            navigate("/EmpList");
        }

    }
    return (
        <div className="container">
            <form onSubmit={submitData}>
         <h3 style={{color:"Blue",textAlign:"center", background:"white",borderRadius:"10px",padding:"5px"}}>Login Here</h3>   
   
            <label>Fullname:</label>
            <br/>
            <input value={user}type="text" required onChange={changeUser} />
            <br /><br /> 

           
            <label>Email:</label>
            <br/>
            <input  value={email}type="email" required onChange={changeEmail} />
            <br /><br />

            <label>Password:</label>
            <br/>
            <input value={pswd} required type="password"onChange={changePswd}/>
            <br /><br />


            <label></label>
            <input type="submit" value="Login Here" style={{ marginTop:"10px",marginBottom:"10px",border:"none",marginLeft:"150px",color:"white", background:"blue",borderRadius:"5px",padding:"10px"}}>   
            </input>
                
              
            </form>
        </div>
    )
}
export default Login;