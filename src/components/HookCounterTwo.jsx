import React, { useState } from 'react'




function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)


    const increment5 = () => {
        for (let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

  return (
    <div>
        <h1>count : {count}</h1>
        
        <button onClick={() => {setCount(count + 1)}}>Increment</button>
        <br/><br/><br/>
        <button onClick={() => {setCount(count - 1)}}>Decrement</button>
        <br/><br/><br/>
        <button onClick={() => {setCount(initialCount)}}>Reset</button>
        <br/><br/><br/><br/>
        <button onClick={increment5}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo


// here we are using hooks UseState count = initialCount, setCount = to the function set on the event onClick
// in the last function we dicided to set it out of the event and use the increment base on the previous value
// by using for and seting i < 5 means increment this by five anytime the button is pressed on 
