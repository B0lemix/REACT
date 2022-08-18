import { useState } from 'react'
import styles from './modules CSS/App.module.css'
import ToDoList from './components/ToDoList'


function App() {

  return (    
  
  <main className={styles.App}>
         <header className={styles.header}>
            <h1>toDoApp</h1>
          </header>


        <h3>A toDoApp React+CSS Modules made 🚀🚀🚀</h3>


         <ToDoList />


  </main>
  )
}

export default App
