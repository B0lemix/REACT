import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){


    const linkStyle = {  // CSS in JS
        padding : "10px",
        display: "block",
        fontSize : "18px",
        color:"white",
        textDecoration:"none"
    }

    const navContainerStyle = {  // CSS in JS
        padding : "10px",
        display: "flex",
        gap : "5px",
        justifyContent: "center",
        backgroundColor:"#181d27"
    }



    return(
        <div style={navContainerStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/create" style={linkStyle}>Create</Link>
        </div>
    )
}