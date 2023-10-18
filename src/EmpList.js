
//https://jsonplaceholder.typicode.com/todos

import { useEffect, useState } from "react";
import "./index.css"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import "./EmpList.css";
import EmpDetails from "./EmpDetails";

function EmpList(){
    const [data,setData]=useState(null)
    const navigate=useNavigate()
    const [value,setValue]=useState("")
    const option=["name","city","mobile"]
    const [sort,setSort]=useState("")
    useEffect(()=>{
        //fetch(`https://kinara-rest-api.onrender.com/Employee?_start=${0}&_end=${11}`)
        fetch(`http://localhost:3000/Employee?`)
       

        .then((res)=>{
                return res.json()
            })
            .then((resp)=>{
                console.log(resp)
                setData(resp)
            })
        },[]);
    
    const deleteData=(id)=>{
        if(window.confirm("Do you want to delete it ?")){
        fetch("http://localhost:3000/Employee/"+id,{
            method:"DELETE"
        })
        .then((s)=>{
            alert("Deleted successfully")
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
}
    }
    const EditData=(id)=>{
        navigate("/empedit/"+id)
    }
    const DetailsData=(id)=>{
        navigate("/empdetails/"+id)
    }
    const updateUser=(e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }
   

    const showData =(data)=>{
        console.log(data)
    }
    // axios
    // npm i axios

    const searchData=async(e)=>{
        e.preventDefault()
        return await axios.get(`http://localhost:3000/Employee?q=${value}`)
        .then((res)=>{
          console.log(res)
          setData(res.data)
        //   setValue("https://kinara-rest-api.onrender.com/Employee")
        setValue("http://localhost:3000/Employee")
        })
        }
    const loadData=(e)=>{
        e.preventDefault()
        fetch("")
            .then((res)=>{
                return res.json()
            })
            .then((resp)=>{
                console.log(resp)
                setData(resp)
            })
 }
   const sortData= async(e)=>{
    let value=e.target.value
    console.log(value)
    setSort(value)
  
   }
return(
<div className="container1">
<div className="card">                
<div className="card-title">
 <h1> Employee Management System</h1> 
 {/* <div class="exit">
 <button class="text-secondary">LogOut</button>
</div> */}

</div>
<div className="card-body">
 <Link to="/form" className="btn btn-success">Add New(+)</Link>
<form onSubmit={searchData}>
   <input value={value} type="text" placeholder="Filter Records" onChange={updateUser} className="form-control" id="exampleInputPassword1"/>
   <button  className="btn btn-primary" type="submit">Search    <i class="fa-solid fa-magnifying-glass"></i></button> 
   <button onClick={loadData} className="btn btn-danger">Reset</button>
</form>
<select value={sort} onChange={sortData}>
    <option>--choose--</option>
    {option.map((data)=>(
        <option>{data}</option> 
    ))}
</select>
  <table className="table table-bordred">
    <thead>
        <tr className="table-dark text-white">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Mobile</th>
            <th>Actions</th>
            </tr>
    </thead>
        <tbody>
            {data?.map((item)=>(
            <tr>
             <td>
                <input type="checkbox" onClick={()=>{showData(item)}}  width="10px"/>
                {item.id} </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td>{item.mobile}</td>
                <td>
                <button onClick={()=>{deleteData(item.id)}}className="btn btn-danger">Delete</button>
                <button onClick={()=>{EditData(item.id)}} className="btn btn-primary">Edit</button>
                <button onClick={()=>{DetailsData(item.id)}} className="btn btn-success">Show Data</button> 
                </td>
            </tr>
            ))}
        </tbody> 
    </table>
</div>
</div>
</div>

 )
 }
export default EmpList;