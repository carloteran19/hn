import React from 'react'
import PostsList from './PostsList'
import Loading from './Loading'
import { fetchMainPosts } from '../utils/api'

export default class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: null,
            error: null
        }

        this.isLoading = this.isLoading.bind(this)    
    }
    componentDidMount() {
      const type = this.props.type;
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
        {this.isLoading() && <Loading />}

        {error && <p>{error}</p>}

        {posts && <PostsList posts={posts}/>}
        </React.Fragment>
      )  
    }
}