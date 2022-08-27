import React from "react";
import { useState } from "react";
import { useAppContext } from "../store/store";
import Layout from "../components/layout";

export default function Create(){

    const [title,setTitle]= useState("");
    const [author,setAuthor]= useState("");
    const [cover,setCover]= useState("");
    const [intro,setIntro]= useState("");
    const [completed,setCompleted]= useState(false);
    const [review,setReview]= useState("");


    const inputStyles = {  //CSS in JS
        formContainer: {
          width: "400px",
          margin: "0 auto",
        },
        container: {
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          margin: "15px 0",
        },
        title: {
          fontSize: "16px",
          textAlign: "left",
          color:"white"
        },
        input: {
          padding: "10px",
          borderRadius: "5px",
          fontSize: "16px",
        },
        button: {
            padding: "15px 20px",
            minWidth: "200px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#1e9638",
            color: "white",
            fontWeigth: "bolder",
            fontSize: "18px",
          },
      };

      



    //importamos el contexto
const store=useAppContext();


    function handleChange(e){
        const name=e.target.name;
        const value=e.target.value;

        switch(name){

            case "title":
                setTitle(value);
                break;
            case "author":
                setAuthor(value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "intro":
                setIntro(value);
                break;
            case "review":
                setReview(value);
                break;
        }

    }

    function handleChangeFile(e){

        const element=e.target; //obtenemos TODOS los archivos cargados
        const file=element.files[0]; //obtenemos el primer archivo
        const reader=new FileReader(); // creamos objeto tipo archivo para usar métodos especiales

        //llamamos al archivo
        reader.readAsDataURL(file);
    
        reader.onloadend=function(){

            //cuando la carga del archivo termine, colocamos esa carga en el estado Cover
            setCover(reader.result.toString())

        }


    }


    function handleSubmit(e){
        e.preventDefault();

        const newBook={
            id:crypto.randomUUID(),
            title, //equivale a title:title, author:author,.... propiedad y valor son iguales
            author,
            cover,
            intro,
            completed,
            review
        };

        store.createItem(newBook);

        

        
    }



    return(
       <Layout>
            <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
                <div style={inputStyles.container}>
                    <div  style={inputStyles.title}>Title</div>
                        <input
                            type="text" 
                            name="title" 
                            onChange={handleChange}
                            value={title} 
                            style={inputStyles.input}/>

                </div>

                <div style={inputStyles.container}>
                    <div   style={inputStyles.author} >Author</div>
                        <input
                            type="text" 
                            name="author" 
                            onChange={handleChange}
                            value={author}
                            style={inputStyles.input} />

                </div>

            
                <div style={inputStyles.container}>
                    <div   style={inputStyles.cover}>Cover</div>
                        <input
                            type="file" 
                            name="cover" 
                            onChange={handleChangeFile}
                            style={inputStyles.input}
                           />
                                <div>
                                    
                                    { // si cover no está vacio (!!cover), coloca la imagen con el URL guardado en el estado mediante
                                        // la función handleChangeFile, en caso contrario coloca un mensaje
                                (!!cover) ? <img src={cover} width="200" alt="cover-preview" /> : <h3>cover-preview</h3>}
                                </div>

                </div>

                <div style={inputStyles.container}>
                    <div   style={inputStyles.intro}>Intro</div>
                        <input
                            type="text" 
                            name="intro" 
                            onChange={handleChange}
                            value={intro}
                            style={inputStyles.input} />

                </div>

                <div style={inputStyles.container}>
                    <div  style={inputStyles.completed}> completed</div>
                        <input
                            type="checkbox" 
                            name="completed" 
                            onChange={handleChange}
                            value={completed} 
                            style={inputStyles.input}/>

                </div>

                <div style={inputStyles.container}>
                    <div  style={inputStyles.review}>review</div>
                        <input
                            type="text" 
                            name="review" 
                            onChange={handleChange}
                            value={review}
                            style={inputStyles.input} />

                </div>
            <input type="submit" value="Register book!"  style={inputStyles.button} />
               
            </form>
         </Layout>
    )
}