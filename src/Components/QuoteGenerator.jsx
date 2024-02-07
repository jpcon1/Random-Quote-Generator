import { useEffect, useState } from "react";
import { animated, useSpring } from '@react-spring/web'




export default function QuoteGenerator(){

    const url = "https://api.quotable.io/random"

    const [word,setWord] = useState("")

    const [author,setAuthor] = useState("")

    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
      }))

      const handleClick = () => {
        api.start({
          from: {
            x: 0,
          },
          to: {
            x: 100,
          },
        })
      }

   function getQuote(){
    fetch(url)

        .then((data)=>data.json())

        .then((item)=>{

            setWord(item.content)

            setAuthor(item.author)

        })
   }

    return(
    <>

    <animated.div
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs,
      }}
      />
    <div className="quote-box">

        <h1>Random Quote Generator</h1>

        <p>{word}</p>

        <p>-{author}</p>

        <button onClick={getQuote}>Get Quote</button>
        <button onClick={handleClick}>animate</button>
    </div>
    </>)
}