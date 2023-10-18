
import { useParams, Link } from "react-router-dom"
import "./Details.css"
import { useState, useEffect } from "react"

function EmpDetails() {
    const [data,setData]=useState(null)
    const {empid}=useParams()
    useEffect(()=>{
        fetch("http://localhost:3000/Employee/"+empid)
            .then((res)=>{
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
    },[])

    return (
        <div>
            <div className="container-fluid">
                <div className="card" style={{ width: "18rem" }}>
                    {data &&
                        <div className="card-body">
                            <h5 className="card-title">Emp Id: {data.id} </h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Emp Name: {data.name}</h6>
                            <p className="card-text">Emp Email: {data.email}</p>
                            <p className="card-text">Emp City: {data.city}</p>
                            <p className="card-text">Emp Mobile: {data.mobile}</p>
                            {/* <a href="#" className="card-link">Back</a> */}
                            {/* <a href="#" className="card-link">Another link</a> */}
                            <Link className="btn btn-danger" to="/">Back</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default EmpDetails;