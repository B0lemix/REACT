import { useRef } from "react"
import EmojiSelector from "./emojiSelector"
import StylesEmojiSelector from "./emojiSelector.module.css"

export default function EmojiSelectorInput (){


    const refInput =useRef(null);  //Asignar una referencia de variable a un elemento o nodo HTML a través del hook

    /*

    function handleClick(e){        //Ejemplo uso de useRef
        refInput.current.focus()   //hacemos REFERENCIA AL INPUT  refInput, 
                                   //en este caso situa el foco en el input de texto tras hacer click en el boton
    }

    */

    return(

        <div className={StylesEmojiSelector.main}>
            <input ref={refInput} />
{/*             <button>Click!</button> */}
            <EmojiSelector ref={refInput}/>
        </div>
    )
}