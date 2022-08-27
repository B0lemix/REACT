// Aquí guardamos el estado de la App de forma global usando useContext

import React from "react";
import {createContext,useEffect,useState, useContext } from "react";


const AppContext = createContext({
//definimos un objeto de con items y métodos para manejarlos
    items:[],
    createItem: (item) => {},
    getItem: (id) => {},
    updateItem: (item) => {},
}); 



export default function Store({children}){

    const [items,setItems]= useState([]); //modificar¡ el estado en ESTE COMPONENTE pero a través del context se modifica GLOBAL

    function createItem(item){
        const temp=[...items];
        temp.unshift(item)

        setItems(temp);
    }

    function getItem(id){
        const item=items.find((item) =>item.id===id)

        return item;
    }

    function updateItem(item){
        const index=items.findIndex((i) => i.id===item.id)  //buscamos el índice a modificar

        const temp = [...items]; //copia del array 

        temp[index]={...item};

        return true;

    }

    return (
        //Todo lo que esté en en el Provider podrá acceder al contexto AppContext (items y los métodos definidos arriba)
    <AppContext.Provider 
        value={{
            items,
            createItem,
            getItem,
            updateItem
        }}>
        {children}
    </AppContext.Provider>
    )
}


//para poder usar el contexto, es necesario exportar el contexto
export function useAppContext(){

    return useContext(AppContext)


}