import { useState } from "react";
import SearchBar from "./components/searchBar";
import styled from "styled-components";


 // StyledComponents
 const StyledButton = styled.button`
 padding: 10px;
 border-radius: 5px;
 border: none;
 background-color: white;
 border: solid 2px #ccc;
 cursor: pointer;
 &:hover {
   background-color: #efefef;
 }
 .activated{
   background-color: #00366
   color: white;
   border: solid 2px #26aeff;
 }
`;


const StyledSelection = styled.div`
  line-height:50px;
  letter-spacing:1.15px;
  font-weight:bold;
`;



//Data for app

const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "Participa en la encuesta",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
  {
    id: "calendar-05",
    title: "Revisión de pendientes con cliente",
  },
];

const people = [
  {
    id: "people-01",
    title: "Juan Perez",
  },
  {
    id: "people-02",
    title: "Marcos Rivas",
  },
  {
    id: "people-03",
    title: "Sergio Martinez",
  },
  {
    id: "people-04",
    title: "Laura Jimenez",
  },
  {
    id: "people-05",
    title: "Horario Martinez",
  },
];

function App() {

  const [data,setData]=useState([...people,...calendar,...emails])

  const [selection,setSelection]=useState(null)
  const [currentOption,setCurrentOption]=useState('all')
  const [count,setCount]=useState(0);

  function handleClick(e){
    const option =  e.target.name

    switch(option){
      case "all":
        setData([...people,...calendar,...emails])
        setCurrentOption("all")
        break

      case "people":
        setData([...people])
        setCurrentOption("people")
        break

      case "calendar":
        setData([...calendar])
        setCurrentOption("calendar")
        break

      case "emails":
        setData([...emails])
        setCurrentOption("emails")
        break
  }


  }

  
  function handleItemSelected(item){
      setSelection(item)

  } 


  return (
    <div>
      <StyledButton onClick={handleClick} name="all">All</StyledButton>
      <StyledButton onClick={handleClick} name="people">People</StyledButton>
      <StyledButton onClick={handleClick} name="calendar">Calendar</StyledButton>
      <StyledButton onClick={handleClick} name="emails">Emails</StyledButton>

      <StyledButton onClick={()=>setCount(count+1)}>{count}</StyledButton>

      {selection ? <StyledSelection> You selected: {selection.title} </StyledSelection> : ""}
      

      <SearchBar items={data} onItemSelected={handleItemSelected} />


    </div>

  )
}

export default App
