import { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";

export default function QuoteGenerator(){

    const url = "https://api.quotable.io/random"

    const [word,setWord] = useState("")

    const [author,setAuthor] = useState("")





   function getQuote(){

    fetch(url)

        .then((data)=>data.json())

        .then((item)=>{
            // gsap.fromTo('.author', { opacity: 0 }, { opacity: 1, duration: 1.2 });
            // gsap.fromTo('.word', { opacity: 0 }, { opacity: 1, duration: 1.2 });
            setWord(item.content)

            setAuthor(item.author)

            

        })
   }

    return(
    <>

    <div className="quote-box">

        

        <h1 className="header">Random Quote Generator</h1>

        <hr/>

        <p className="word">{word}</p>

        <p className="author">- {author}</p>

        <button onClick={getQuote}>Get Quote</button>

    </div>
    </>)
}