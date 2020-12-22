import React from 'react'
import Loading from './Loading'
import CommentsList from './CommentsList'
import PostInfo from './PostInfo'
import { fetchItem, fetchComments } from '../utils/api'

export default class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            comments: null,
            loadingPost: true,
            loadingComments: true,
            error: null
        }   
    }
    componentDidMount() {
      const id = this.props.id;

      fetchItem(id)
        .then((post) => {
            this.setState({
                post,
                loadingPost: false,
                error: null
            })

            return fetchComments(post.kids.slice(0, 30))
        })
        .then((comments) => {
            this.setState({
                comments,
                loadingComments: false,
                error: null
            })
        })
        .catch(() => {
            console.warn('Error fetching post/comments')

            this.setState({
                error: `There was an error fetching post/comments`
            })
        })
    }
    render() {
      const { post, comments, loadingPost, loadingComments, error } = this.state

      return (
        <React.Fragment> 
        {error && <p>{error}</p>}

        {loadingPost === true
          ? <Loading />
          : <PostInfo post={post}/>}

        {loadingComments === true
          ? <Loading />
          : <CommentsList comments={comments}/>}  
        </React.Fragment>
      )  
    }
}