import React from "react";
import { useMemo,useState,useEffect } from "react";
import MarkedItem from "./markedItems";


import styled from "styled-components";


 // StyledComponents
const StyledResultsContainer = styled.div`
  position: absolute;
  width: 400px;
  background: white;
  border: solid 1px #222;
  border-top: solid 1px transparent;
  margin-top: -3px;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
`;



//useMemo se usa para guardar resultados de funciones
// para que se ejecuten ciertos metodos o funciones cuando se cambien los valores, similar a useeffect, 
//pero aqui la variable es en línea y en useEffect tiene que tener alcance


export default function Results(
    {items,
    onItemSelected,
    query,
    onResultsCalculated
}){

    const [results,setResults] = useState([]);
    const filteredItems = useMemo(()=> findMatch(items,query),[items,query]) //cada vez que cambia el valor de los argumentos se vuelve a ejecutar
                                                                // la función y se guarda el resultado en la variable, si usaramos useEffect, se rendizaría cada vez. 
                                                                    // En este ejemplo solo ejecuta la función una vez 


useEffect(() => {  //cada vez que se actualice RESULTS llamamos a la funcion OnResultsCalculated que cuenta el numero de coincidencias

    onResultsCalculated(results)
}, [results])
                                                                    

    function findMatch(items,query){
            const res=items.filter(element =>{
                return element.title.toLowerCase().indexOf(query) >= 0 && query.length > 0; //filtra valores vacios y compara con la query
            });

            setResults(res)
            return res;


    }



    return(
        <StyledResultsContainer>
            {query !== "" ? (filteredItems.map((item)=><MarkedItem key={item.id} item={item} query={query} onClick={onItemSelected}></MarkedItem>)) : ""} 
        </StyledResultsContainer>
    )
}