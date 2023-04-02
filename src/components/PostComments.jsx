import axios from 'axios'
import React, { Component } from 'react'
import '../styles/SecondPost.css'



export class PostComments extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         comments: [],
         error: ''
      }
    }

   componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(response => {
        console.log(response)
        this.setState({
            comments: response.data
        })
    })
    .catch(error => {
        console.log(error)
      this.setState({
        error: 'Something went wrong if you are the owner of this app check the logs'
      })
    })
   }


  render() {
    const {comments, error} = this.state
    return (
      <div>
        <div>
            {
                error ? <h1 className='errorPhotos'>{error}</h1> : null
            }
        </div>
        <div>
            {comments.length ? comments.map(comment => <h1 key={comment.id}><br/><br/><br/>{comment.name}<br/>{comment.body}<br/>{comment.email}</h1>) : null}
        </div>

      </div>
    )
  }
}

export default PostComments