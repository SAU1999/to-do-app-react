import React from "react";
import {Link} from "react-router-dom"

function Header(){
    return (
        <header style={headerStyle}>
            <h1>To Do List</h1>
            <Link to="/">Home</Link>|
            <Link to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    color : "black",
    backGround : "white",
    textAlign : "center",
    padding : "10px"

}


export default Header