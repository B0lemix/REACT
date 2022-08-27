import React from "react";
import { useMemo } from "react";
import styled from "styled-components"


const StyledMarker = styled.span`
  background-color: yellow;
  font-weight: bolder;
  border-radius: 2px;
`;

const StyledItem = styled.a`
  color: black;
  display: block;
  padding: 10px;
  text-decoration: none;
  cursor:pointer;
  &:hover {
    background-color: #4c91ba;
    color: white;
  }
  &:hover span {
    color: black;
  }
`;


export default function MarkedItem({item,query,onClick}){

    const {left,center,right}=useMemo(()=>getPositions(item,query),[item,query])

    function getPositions(item,query){

        const index=item.title.toLowerCase().indexOf(query); //busca posicion del texto con la coincidencia de la query

        const left= item.title.slice(0,index); //cortamos el item por la izquierda hasta el index
        const right= item.title.slice(index+query.length); //cortamos el item por la derecha hasta el index
        const center= item.title.slice(index,index+query.length);

        return{
            left,
            center,
            right
        }
    }


    
    function handleClick(){

        onClick(item);
    } 

    return(
        <StyledItem onClick={handleClick}>
                {left}
                <StyledMarker style={{fontWeight:'bolder',backgroundColor:"yellow"}}>{center}</StyledMarker>{right}

        </StyledItem>


    )
}