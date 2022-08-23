import { forwardRef, useState , useRef, useEffect} from "react"
import {data as emojiList} from "./data"
import EmojiSearch from "./emojiSearch"
import EmojiButton from "./emojiButton"
import StylesEmojiSelector from "./emojiSelector.module.css"

// definir componentes de padre a hijo usando useRef

export function EmojiSelector(props,refInput){

    const [isOpen,setIsOpen]=useState(false)
    const [emojis,setEmojis]=useState(emojiList)


    const containerRef= useRef(null); // useRef para que al hacer click en cualquier parte de la app, se cierre el contenedor de emojis

    // useEffect para que compruebe donde hacemos click
    useEffect(() => {
    window.addEventListener('click', (e) =>{
        if(!containerRef.current.contains(e.target)){
            //En el caso de que no se haga click en el contenedor de emojis, sino en otra parte de la app, se cierra l contenedor de emojis
            // y se reinicia el listado de emojis
            setIsOpen(false);
            setEmojis(emojiList);

        }
    })


    }, [])


    
function handleClickOpen(){
    setIsOpen(!isOpen)
}

function handleOnClickEmoji(emoji){

    //usamos useRef aquí para que haga referencia al texto del input para sustutir por un emoji y siga la posicion del cursor


    const cursorPosition = refInput.current.selectionStart;
    const text=refInput.current.value;


    //para seleccionar texto del input useRef previo al cursor y posterior 
    //(caso en el que el cursor se quede en medio y se tenga que agregar emoji en medio)

    const prevCursor=text.slice(0,cursorPosition)
    const nextCursor=text.slice(cursorPosition);

    refInput.current.value= prevCursor+emoji.symbol + nextCursor;
    refInput.current.selectionStart=cursorPosition+emoji.symbol.length;
    refInput.current.selectionEnd=cursorPosition+emoji.symbol.length;
    refInput.current.focus();

}


function handleSearch(e){
    const query = e.target.value;

    if(!!query){ // si existe un valor
        const search=emojiList.filter(emoji => {
            return (
                emoji.name.toLowerCase().includes(query) ||
                emoji.keywords.toLowerCase().includes(query)
            )

        })
        setEmojis(search);
    }else{
        setEmojis(emojiList)
    }

}

    return(
        <div  ref={containerRef} className={StylesEmojiSelector.inputContainer}>
            <button onClick={handleClickOpen} className={StylesEmojiSelector.emojiPickerButton}>😆</button>

            {isOpen ? (    
                 <div className={StylesEmojiSelector.emojiPickerContainer}>
                   <EmojiSearch onSearch={handleSearch} />
                      <div className={StylesEmojiSelector.emojiList}>
                            {emojis.map((emoji) =>(
                                <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleOnClickEmoji} />

                            ))}
                     </div>
                   </div>
                ) :( "" )}

        </div>
    );
}

export default forwardRef(EmojiSelector);