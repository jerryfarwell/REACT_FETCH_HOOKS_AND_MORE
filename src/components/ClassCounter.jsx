import React, { Component } from 'react'




class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         number: 0
      }
    }

    handleIncrement = () => {
        this.setState({
            number: this.state.number + 1
        })
    }


  render() {
    const {number} = this.state
    return (
      <div>
         <button onClick={() => {this.handleIncrement()}}>Increase me {number} times</button>
      </div>
    )
  }
}

export default ClassCounter