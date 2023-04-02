import { useState } from "react"




function HookCounter() {

    const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={() => {setCount(count + 1)}}>Increase me {count} times </button>
    </div>
  )
}

export default HookCounter


// hooks allow us to set state into a function, Hooks useState
// here the first value of our const which is count is the state giving in the beggining and is equal to the value into the useState, here is 0
// the second value wich is setCount is the function that set the operation that is set on the event 
// in conclusion count is like this.state into class and setCount is like this.setState 