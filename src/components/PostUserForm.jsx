import axios from 'axios'
import React, { Component } from 'react'






 class PostUserForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: '',
         email: '',
         password: '',
         country: ''
      }
    }

    handleChange = (event) => {
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
    }

  render() {
    const {firstName, email, password, country} = this.state
    return (
      <div>
        
        <form action="" onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="">First Name</label><br/>
                <input type="text" name='firstName' value={firstName}onChange={this.handleChange}/>
            </div>
            <br/>

            <div>
                <label htmlFor="">Email</label><br/>
                <input type="text" name= 'email' value={email} onChange={this.handleChange}/>
            </div>
            <br/>

            <div>
                <label htmlFor="">Password</label><br/>
                <input type="text" name= 'password' value={password} onChange={this.handleChange}/>
            </div>
            <br/>

            <div>
                <label htmlFor="">Country</label><br/>
                <select name="country"  value={country} onChange={this.handleChange}>
                    <option >Congo</option>
                    <option >Gabon</option>
                    <option >France</option>
                    <option >Ghana</option>
                </select>
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

export default PostUserForm


// post data in the server, here we create a class rce, into the return we create a form with submit button, we used name and value to be able to set the state
// we used the same onChange for all inputs, we create a constructor with rconst and we set values to empty strings because is a form and can be known in advance 
// we set our onChange handler using event as usal for forms, because we have name and value we target both events 
// we create a function for our form onSubmit and we decided to load the sent data into our console just by calling this.state because the state is known in advance 
