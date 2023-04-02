import React, { Component } from 'react'
import axios from 'axios'



 class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: ''
      }
    }
   
    componentDidMount(){
          axios.get("https://jsonplaceholder.typicode.com/posts")

          .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
          .catch(error => 
            console.log(error),
            this.setState({
                error: "error the fetch didn't work "
            })
            )
    }


  render() {
    const {posts, error} = this.state
    return (
      <div>
        <h1>List of Posts</h1>
        
            {
            posts.length ? 
            posts.map(post => <div key={post.id}>{post.title}</div>) : null
            }

            {error ? <div>{error}</div> : null }
      </div>
    )
  }
}

export default PostList


// this is PostList.jsx, here first step we create class using rce and  we import axios from 'axios', we create a constructor with rconst  this.sate is going to be posts because we are fetching posts but this can call any name
// posts: []  we use empty array because posts has a lot of elements 
// componentDidMount() is where the fetch has to be set  our get needs to be set with axios, so axios.get(ourUrl/whatWeWantToFetch) and we need .then() and .catch()   into .then we create response and log it into the console
// Now to able to see our fetch into our page we are going to set this.setState just after the console.log  posts: response.data
// .catch() is simply used to catch errors
// now how do we display our posts on our page first we have to set a constant  const {posts} = this.state  and  {posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null} we are using the if and else condition and .map to display list as usual   they key should be set up
// now we can render our file into App.jsx to se it 
// error was added in case the fetch fail it will show the error this line here display the error {error ? <div>{error}</div> : null } and error is set just like posts in constructor and componentDidMount