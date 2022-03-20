import React, { useState } from "react";
import NavBar from "../SideNav/SideNav";
import Header from "../Layout/components/Header/Header";
import '../../stylesheets/App.css'

function AddEmp() {
  return (
    <>
      <Header></Header>
      <main>        
          <NavBar id="emp1"></NavBar>
          <div className="container">
              <form>
                  <label>Name</label>                
                  <input ></input>                     
                  <label>Email Address</label>                
                  <input ></input>                
                  <label>Username</label>                
                  <input ></input>                
                  <label>Password</label>                
                  <input ></input>                
                  <label>Contact</label>                
                  <input ></input>                
                  <label>DoB</label>                
                  <input ></input>                
                  <label>CNIC (optional)</label>
                  <input ></input>
                  <button>CREATE NEW EMPLOYEE</button>
              </form>      
          </div>
      </main>
    </>
  );
};

export default AddEmp;
