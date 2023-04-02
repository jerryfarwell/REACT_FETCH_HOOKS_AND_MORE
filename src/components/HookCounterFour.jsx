import React, { useState } from 'react'




function HookCounterFour() {
    const [items, setItems] = useState([])


    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

  return (
    <div>
        <button onClick={addItem}>Add items</button>
      <ul>
        {
            items.map(item => <li key={item.id}>{item.value}</li>)
        }
      </ul>
    </div>
  )
}

export default HookCounterFour

// here useState replaces this.state it is set to an empty array it could have been set to a string or an objet
// setItems replaces this.setState and it is into our onClick event, the onClick event is define as a const 
