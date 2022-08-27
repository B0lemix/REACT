import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View(){

    const [item,setItem] = useState({})
    const params =useParams(); //permite obtener parametros de los enlaces, por ejemlpo el id de un item.
    const store=useAppContext();

    useEffect(() => {

        const element=store.getItem(params.itemId)
        setItem(element)
      
    }, [])

    const itemStyles={
        container:{
            display:"flex",
            gap:"20px",
            color:"white",
            width:"800px",
            margin:"0 auto"
        }
    }


    if(!item){
        return     <Layout>Item not found</Layout>
    }

    

    return(
       <Layout>
        <div style={itemStyles.container}>
            <div>
              <div>{item?.cover ? <img src={item.cover} width="400"></img> : ''}</div>
            </div>
            <div>
                <h2>{item?.title}</h2>
                <div>{item?.author}</div>
                <div>{item?.intro}</div>
                <div>{item?.completed ? 'Completed' : 'Not Completed'}</div>
                <div>{item?.review}</div>
            </div>
        </div>
       </Layout>
    )
}