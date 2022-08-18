import React,{useState} from "react";
import StylesToDoList from '../modules CSS/StylesToDoList.module.css'
import Task from "./Task";


export default function ToDoList(){


    const [toDoList,SetToDoList] =useState([])
    const [title, setTitle] = useState("")


    function handleOnChange(e){

        e.preventDefault();
        setTitle(e.target.value)


    }


    function handleSubmit(e){
        e.preventDefault();

       if (title===""){
        alert("EMPTY Task NOT ALLOWED. Please write a task.")

       }else{
              const newTask= {
                    id:crypto.randomUUID(),
                    title:title,
                    completed:false,
                };

                SetToDoList([...toDoList,newTask]);

                setTitle("")
            
       }

    }



    function deleteTask(e){
        e.preventDefault();
        SetToDoList([])

    }
    

    function handleUpdate(id,value){
        const temp =[...toDoList]
        const taskToUpdate=temp.find(item=>item.id===id)
        taskToUpdate.title=value;
        SetToDoList(temp)

    }


    
    function handleDelete(id){
        const temp =toDoList.filter(item=>item.id!=id)
        SetToDoList(temp)

    }


    return(

        <div className={StylesToDoList.container}>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' placeholder="Write a task title..." value={title} onChange={handleOnChange}/>



                <button className={StylesToDoList.add} value="" onClick={handleSubmit}>Add Task</button>
                <button className={StylesToDoList.delete} value="Delete All Task" onClick={deleteTask}>Delete All Task</button>

            </form>

        {toDoList.length===0 ?  <h4>No tasks</h4> :  <h4><u>task's List</u></h4>}


            <ul>
               {toDoList.map((task) =><Task id={task.id} title={task.title} onUpdate={handleUpdate} onDelete={handleDelete}></Task>)}
            </ul>


        </div>

        
    )





}