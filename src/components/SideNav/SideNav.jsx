import React, { useEffect } from "react";
import $ from 'jquery';

function handlePanel(navSelection) {
    if (navSelection == "cow") {
        $('#cows').toggle();
    }
    else if (navSelection == "expenses") {
        $('#expenses').toggle();
    }
    else if (navSelection == "milk") {
        $('#milk').toggle();
    }
    else if (navSelection == "employee") {
        $('#employee').toggle();
    }
}
function highlight(id) {
    $("#" + id).css("background-color", "#878787");
}
function SideNav(props) {
    useEffect(() => {
        if (Object.keys(props).length != null) {
            console.log(props.id);
            highlight(props.id);
        }
    }, []);
    return (
        <nav>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '10px' }}>
                <h3>Dashboard</h3>
                <p>=</p>
            </div>
            <hr></hr>
            <h3>Home</h3>
            <hr></hr>
            <h3 onClick={() => handlePanel("cow")}>Cow</h3>
            <hr></hr>
            <div id="cows" className="subNav">
                <h3 id="cow1">Add Cow</h3>
                <hr className="hrcut"></hr>
                <h3 id="cow2">Cows</h3>
            </div>
            <hr></hr>
            <h3 onClick={() => handlePanel("expenses")}>Expense</h3>
            <hr></hr>
            <div id="expenses" className="subNav">
                <h3 id="expense1">Food</h3>
                <hr className="hrcut"></hr>
                <h3 id="expense2">Medicine</h3>
            </div>
            <hr></hr>
            <h3 onClick={() => handlePanel("milk")}>Milk Management</h3>
            <hr></hr>
            <div id="milk" className="subNav">
                <h3 id="milk1">Milk The Cows</h3>
                <hr className="hrcut"></hr>
                <h3 id="milk2">Sell Milk</h3>
            </div>
            <hr></hr>
            <h3 onClick={() => handlePanel("employee")}>Employee Management</h3>
            <hr></hr>
            <div id="employee" className="subNav">
                <h3 id="emp1">Add Employee</h3>
                <hr className="hrcut"></hr>
                <h3 id="emp2">Employees</h3>
            </div>
        </nav>
    );
};

export default SideNav;
