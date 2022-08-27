import { Link } from "react-router-dom";

export default function Item({item}){

    const itemContainerStyle ={  //CSS in JS
        display:"flex",
        flexDirection:"column",
        width:"300px"
    }

    const itemInfoStyle = { //CSS in JS
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        textAlign : "center",
        color:"white",
        textDecoration:"none"
    }

    return(
        <div style={itemContainerStyle}> 
            <Link to={`/view/${item.id}`} style={itemInfoStyle}>
            <img src={item.cover} width="200" alt={item.title}></img>
            <div>{item.title}</div>
            </Link>
        </div>
    )
}