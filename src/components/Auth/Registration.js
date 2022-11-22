import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Registration() {
  const unique_id = uuid();
  const navigate = useNavigate();
  
const [firstName,setFirstName] = useState(null)
const [lastName,setLastName] = useState(null)
const [email,setEmail] = useState(null)
const [password,setPassword] = useState(null)
const [nationality,setNationality] = useState(null)




// Handle rejecter
const handleRejecter = (e)=>{
    e.preventDefault()
const usrInfo = {
    id:unique_id,
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password,
    nationality:nationality,
}
// save user info in LocalStorage
localStorage.setItem('user',JSON.stringify(usrInfo))
e.target.first.value =null
e.target.last.value =null
e.target.email.value =null
e.target.password.value  =null
navigate('/')
}



  return (
    <div className="login-container">
      <div className="login">
        <form onSubmit={handleRejecter} className="login-form">
          <h2 className="heading-login-form">Register</h2>
          {/* First name */}
          <div className="forms-inputs-auth">
          <input
            type="text"
            className="form-control"
            name="first"
            placeholder="First Name"
            required
          onChange={(e)=>setFirstName(e.target.value)}
            autoFocus
            minLength={3}
            maxLength={10}
          />
          {/* Last name */}
          <input
            type="text"
            className="form-control"
            name="last"
            placeholder="Last Name"
            required
            onChange={(e)=>setLastName(e.target.value)}
            minLength={3}
            maxLength={10}
          />

          {/* Email */}
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            required
            onChange={(e)=>setEmail(e.target.value)}
          />
          {/* password */}
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
            onChange={(e)=>setPassword(e.target.value)}
            minLength={8}
            maxLength={15}
          />
           </div>
          <div className="dropdown-list">
            <select  className="nationality" required onChange={(e)=>setNationality(e.target.value)}>
              <option value="Jordanian">Jordanian</option>
              <option value="American">American</option>
              <option value="Canadian">Canadian</option>
              <option value="Russian ">Russian </option>
              <option value="Afghanistan">Afghanistan</option>
              <option  hidden selected>
                Nationality
              </option>
            </select>
          </div>
          <button className="btn">Rejecter</button>
        </form>
        <button onClick={() => navigate("/")} className="navigate">
          Login?
        </button>
      </div>
    </div>
  );
}
