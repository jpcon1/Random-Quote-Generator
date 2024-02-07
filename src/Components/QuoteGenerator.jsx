import { useState } from "react";






export default function QuoteGenerator(){


    const url = "https://api.quotable.io/random"
    const [word,setWord] = useState("")
    const [author,setAuthor] = useState("")

   let getQuote = ()=>{
        fetch(url)
        .then((data)=>data.json())
        .then((item)=>{
            setWord(item.content)
            setAuthor(item.author)
        })
   }





    return(
    <>
    <div className="quote-box">
        <h1>Random Quote Generator</h1>
        <p>{word}</p>
        <p>-{author}</p>
        <button onClick={getQuote}>Get Quote</button>

        
    </div>
    </>)
}