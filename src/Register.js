//https://json-rest-api-xvhk.onrender.com
import{ useState } from "react";
import{ useNavigate } from "react-router-dom";
import "./Register"


import "./Register.css";
function Register() {
    const[user,setUser]=useState("")
    const[email,setEmail]=useState("")
    const[pswd,setpswd]=useState("")
    const[cpswd,setcpswd]=useState("")
    const navigate=useNavigate()
const changeUser=(e)=>{
    setUser(e.target.value)
}
const changeEmail=(e)=>{
    setEmail(e.target.value)
}
const changePswd=(e)=>{
    setpswd(e.target.value)
}
const changeCpswd=(e)=>{
    setcpswd(e.target.value)
}
const submitData=()=>{
    if(user.length<=5)
    alert("user should be > 5 characters")
    else if(pswd !== cpswd){
       alert("password does not match..") 
    }
    else{ 
        alert("form successfully submitted")
        navigate("/Login")
    }
   
}
    return (
        <div className="container">
            <form onSubmit={submitData}>

            <h3 style={{color:"blue",textAlign:"center", background:"white",borderRadius:"10px",padding:"5px"}}>Register Now </h3>   
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

            <label>Confirm Password:</label>
            <br/>
            <input value={cpswd} required type="password" onChange={changeCpswd} />
            <br /><br />

            <label></label>
            <input type="submit" value="Register Now" style={{border:"none",marginLeft:"160px",color:"white", background:"blue",borderRadius:"5px",padding:"10px",marginBottom:"10px",marginTop:"10px"}}>
                
            </input>
        </form>
        </div>
    )
}
export default Register;