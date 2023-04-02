import React, { Component } from 'react'
import axios from 'axios'
import '../styles/secondPost.css'




 class SecondPostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         photos: [], 
         error: ''
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos")

        .then(response => {
            console.log(response)
            this.setState({
                photos: response.data
            })
            })

            .catch(error => {
                console.log(error)
                this.setState({
                    error: " Something went wront the data couldn't be fetched "
                })
            })
    }

  render() {
    const {photos, error} = this.state
    return (
      <div>
        <h1>All photos's url </h1>
        {
            photos ? photos.map(photo => <div key={photo.id}>{photo.url}</div>) : null 
        }

        <h3 className='errorPhotos'>{error ? <div>{error}</div> : null }</h3>
      </div>
    )
  }
}

export default SecondPostList