import React, { useState } from 'react'




function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})



   

  return (
    <div>
       <form action="" >
        <div>
            <label htmlFor="">First name</label><br/>
            <input type="text" name='firstName' value={name.firstName} onChange={e => {setName({...name, firstName: e.target.value})}}/>
        </div>
        <br/><br/><br/>
        <div>
            <label htmlFor="">Last name</label><br/>
            <input type="text" name='lastName' value={name.lastName} onChange={e => {setName({...name, lastName: e.target.value})}}/>
        </div>
        <br/><br/><br/>
        <div>
            <button type='submit'>Submit</button>
        </div>
       </form>

       <div>
        <h1>your first name is {name.firstName}</h1>
        <h1>your last name is {name.lastName}</h1>
       </div>
    </div>
  )
}

export default HookCounterThree

// here it shows that using the hooks is a shorter way of using class, the this.setState is withing the onChange event 
// ...name, this simply allows to show both values on the screen 
// as said before useState is like this.state and it is linked to the first variable wich is name 
// and setName is the function that has to be define   the letter e is simply event 