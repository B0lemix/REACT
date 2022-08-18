import React,{useState} from "react";
import StyleTask from  '../modules CSS/StyleTask.module.css' 


export default function Task({id,title, onUpdate, onDelete}){

    const [isEdit,setIsEdit]=useState(false)


function FormEdit({title}){

    const [newValue,setNewValue]=useState(title)

    function handleSubmit(e){
        e.preventDefault();
    }

    function handleChange(e){
        const value = e.target.value;
        setNewValue(value)

    }

    function handleClick(e){
        console.log(id ,newValue);
        onUpdate(id,newValue) 
        setIsEdit(false)


    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder={title} 
              onChange={handleChange} 
              value={newValue}
            /> 
            <button onClick={handleClick}>Update!</button>
        </form> 
    )
}

function TaskInfo(){
    return(
        <li key={id}>{title}
         
        <button  className={StyleTask.update} onClick={()=>setIsEdit(true)}>UPDATE</button>

        <button  className={StyleTask.delete} onClick={(e)=>onDelete(id)}>DELETE</button>
        
    </li>)
    
}


    return(

        <div>
 {   isEdit ? <FormEdit title={title}/> : <TaskInfo></TaskInfo>}
        

        </div>
      



    )
}