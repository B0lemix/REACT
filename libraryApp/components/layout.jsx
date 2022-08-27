import React from "react";
import Navbar from "./navbar";

export default function Layout({children}){


    const containerStyle = {  // CSS in JS
        width:"90%",
        margin:"100px auto"
    }

    return(
        <div>
            <Navbar />
            <div style={containerStyle}>{children}</div>

        </div>
    )
}