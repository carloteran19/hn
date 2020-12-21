import React from 'react'
import PostsList from './PostsList'
import { fetchMainPosts } from '../utils/api'

export default class New extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: null,
            error: null
        }

        this.isLoading = this.isLoading.bind(this)    
    }
    componentDidMount() {
      const type = 'new';
      fetchMainPosts(type)
        .then((posts) => this.setState({
          posts,
          error: null,
        }))
          .catch(() => {
            console.warn('Error fetching news')

            this.setState({
              error: `There was an error fetching the news.`
            })
          }) 
    }
    isLoading() {
      return this.state.posts === null && this.state.error === null
    }
    render() {
      const { posts, error } = this.state

      return (
        <React.Fragment>
        <h2>New</h2>  
        {this.isLoading() && <p>LOADING</p>}

        {error && <p>{error}</p>}

        {posts && <PostsList posts={posts}/>}
        </React.Fragment>
      )  
    }
}