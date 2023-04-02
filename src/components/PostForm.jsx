import React, { Component } from 'react'
import axios from 'axios'



class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: ''
      }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

  render() {
    const {userId, title, body} = this.state

    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="">User id </label><br/>
                <input type="text" name='userId' value={userId} onChange={this.changeHandler} />
            </div>
            <br/>
            <div>
            <label htmlFor="">Title </label><br/>
                <input type="text" name='title' value={title} onChange={this.changeHandler}/>
            </div>
            <br/>
            <div>
            <label htmlFor="">Body </label><br/>
                <input type="text" name='body' value={body} onChange={this.changeHandler}/>
            </div>
            <br/>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default PostForm


// post data in the server, here we create a class rce, into the return we create a form with submit button, we used name and value to be able to set the state
// we used the same onChange for all inputs, we create a constructor with rconst and we set values to empty strings because is a form and can be known in advance 
// we set our onChange handler using event as usal for forms, because we have name and value we target both events 
// we create a function for our form onSubmit and we decided to load the sent data into our console just by calling this.state because the state is known in advance 
