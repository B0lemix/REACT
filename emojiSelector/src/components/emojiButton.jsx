import StylesEmojiSelector from "./emojiSelector.module.css"

export default function EmojiButton({emoji,onClick}){


    function handleClick(){

        onClick(emoji)
    }
    return(
        <button onClick={handleClick} className={StylesEmojiSelector.emojiButton}>
            {emoji.symbol}
        </button>
    )
}