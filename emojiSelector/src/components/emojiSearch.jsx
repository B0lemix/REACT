import { useState } from "react"
import StylesEmojiSelector from "./emojiSelector.module.css"

export default function EmojiSearch({onSearch}){
    
    
    const [value,setValue]=useState("")

    function handleChange(e){
        setValue(e.target.value)
        onSearch(e)
    }

    return(
        <input className={StylesEmojiSelector.search} onChange={handleChange} value={value}></input>
    )
}