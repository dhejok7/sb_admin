import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function AddUser({users , setUsers}) {

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  let [timings,setTimings] = useState("")
  
  let navigate = useNavigate()

  let handleSubmit = ()=>{
    let newData = {name,email,mobile,batch,timings}
    let newArray = [...users]
    newArray.push(newData)
    setUsers(newArray)
    navigate('/dashboard')
  }
  
  return <div className="container-fluid">
      <h1>Add User</h1>
      <Form >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" placeholder="Enter mobile number" onChange={(e)=>setMobile(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Batch</Form.Label>
          <Form.Control type="text" placeholder="Enter batch number" onChange={(e)=>setBatch(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Timings</Form.Label>
          <Form.Select defaultValue={"0"} onChange={(e)=>setTimings(e.target.value)}>
          <option value="0" disabled>Select timings</option>
            <option value="10AM to 1PM">10AM to 1PM</option>
            <option value="1PM to 4PM">1PM to 4PM</option>
            <option value="2PM to 5PM">2PM to 5PM</option>
          </Form.Select>
        </Form.Group>
        
        <Button variant="primary" onClick={()=>handleSubmit()
        }>
          Submit
        </Button>
      </Form>
    </div>

}

export default AddUser;
