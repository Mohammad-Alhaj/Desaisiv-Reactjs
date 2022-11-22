import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

import Alert from "../Alert/Alert";

export default function Login(props) {
  const[password,setPassword] = useState(null)
  const[email,setEmail] = useState(null)
  const user = JSON.parse(localStorage.getItem("user"));

  const [isLogin, setLogin] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [typeMessageSate, setTypeMessage] = useState(null);
  const navigate = useNavigate();

  


  // Alate Message
  function messageType(typeMessage) {
    if (typeMessage === "login successfully") {
      setTypeMessage("login successfully");
    } else if (typeMessage === "error") {
      setTypeMessage("error");
    }
  }

  // handle Login function

  const handleLogin = (e) => {
    e.preventDefault();
  if(user){
    if (
      email!== user.email ||
      password!== user.password
    ) {
      setLogin(false);
      setShowMessage(true);
      messageType("error");
    } else {
      setLogin(true);
      localStorage.setItem("isLogin", isLogin);
      setShowMessage(true);
      messageType("login successfully");
      setTimeout(() => {
        navigate('/employees')
      }, 1000);
 
    }}else {
      setShowMessage(true);
      messageType("error");
    }
    
  };

  // The Error/Success Message disappear after time..
  if (showMessage) {
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  }

  return (
    <>
      <Alert check={showMessage} message={typeMessageSate} />
        <>
          <div className="login-container">
            <div className="login">
              <form onSubmit={handleLogin} className="login-form">
                <h2 className="heading-login-form">Please Login</h2>
                <div className="forms-inputs-auth">
                  <input
                    type="email"
                    className="form-control"
                    name="username"
                    placeholder="Email"
                    required
                    autoFocus
                   onChange={(e)=>setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <button className="btn">Login</button>
              </form>
              <button
                onClick={() => navigate("/register")}
                className="navigate"
              >
                don't have an account?
              </button>
            </div>
          </div>
        </>
  

    </>
  );
}
