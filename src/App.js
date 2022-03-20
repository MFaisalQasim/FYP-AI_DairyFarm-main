import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SignInForm from "./components/Auth/SignInForm/SignInForm";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import "./stylesheets/App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Router basename="/react-auth-ui/">
          <Route path="/Signin" exact component={SignInForm} />
          <Route path="/Signup" exact component={SignInForm} />
        <div className="App">
          <Layout>
            <Route exact path="/s" component={AddEmployee} />
          </Layout>
        </div>
      </Router>
    </>
  );
}

export default App;
