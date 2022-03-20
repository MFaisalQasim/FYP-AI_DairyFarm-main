import React, { useState } from "react";
import "./SignInForm.scss"

const SignInF = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // var username = document.getElementById("username");
  // var password = document.getElementById("password");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username", username);
    console.log("PASSWORD", password);
  };
  var alertRedInput = "#8C1010";
  var defaultInput = "rgba(10, 180, 180, 1)";

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");



  
  function setUsername(usernameInput) {
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
      issueArr.push("No special characters!");
    }
    if (issueArr.length > 0) {
      username.setCustomValidity(issueArr);
      username.style.borderColor = alertRedInput;
    } else {
      username.setCustomValidity("");
      username.style.borderColor = defaultInput;
    }
  }

  function setPassword(passwordInput) {
    var issueArr = [];
    if (!/^.{7,15}$/.test(passwordInput)) {
      issueArr.push("Password must be between 7-15 characters.");
    }
    if (!/\d/.test(passwordInput)) {
      issueArr.push("Must contain at least one number.");
    }
    if (!/[a-z]/.test(passwordInput)) {
      issueArr.push("Must contain a lowercase letter.");
    }
    if (!/[A-Z]/.test(passwordInput)) {
      issueArr.push("Must contain an uppercase letter.");
    }
    if (issueArr.length > 0) {
      password.setCustomValidity(issueArr.join("\n"));
      password.style.borderColor = alertRedInput;
    } else {
      password.setCustomValidity("");
      password.style.borderColor = defaultInput;
    }
  }
  return (
    <>
      <div className="signupSection">
        <div className="info">
          <h2>Log in</h2>
          <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
        </div>
        <form action="#" method="POST" className="signupForm" name="signupform" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <ul className="noBullet">
            <li>
              <label htmlFor="username"></label>
              <input type="text" className="inputFields" id="username" name="username" placeholder="Username"
                // value={username} 
                onChange={(e) => setUsername(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="password"></label>
              <input type="password" className="inputFields" id="password" name="password" placeholder="Password"
                // value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            {/* <li>
        <label htmlFor="email"></label>
        <input type="email" className="inputFields" id="email" name="email" placeholder="Email"  
        required/>
      </li> */}
            <li id="center-btn">
              <input type="submit" id="join-btn" name="join" alt="Join" value="Join" />
            </li>
          </ul>
        </form>
      </div>
      {/* <div className="loginContainer">
      <h3>QRO Dairy Farm</h3>        
      <div className="formTitle">
        <div className="formTitleLink">Log In</div>
      </div>
      <div className="formCenter">
        <form className="formFields" onSubmit={handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlhtmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email" id="email"
              placeholder="Enter your email" name="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlhtmlFor="password">
              Password
            </label>
            <input
              type="password" id="password" placeholder="Enter your password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="formField">
            <button>Log In</button>
          </div>
        </form>
      </div>
    </div> */}
    </>
  );
};

export default SignInF;
