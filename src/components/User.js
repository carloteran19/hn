import React from 'react'
import PostsList from './PostsList'
import UserInfo from './UserInfo'
import Loading from './Loading'
import { fetchUser, fetchPosts } from '../utils/api'
import queryString from 'query-string'

export default class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            posts: null,
            loadingUser: true,
            loadingPosts: true,
            error: null
        }   
    }
    componentDidMount() {
      const values = queryString.parse(this.props.location.search)
      const id = values.id;

      fetchUser(id)
        .then((user) => {
            this.setState({
                user,
                loadingUser: false,
                error: null
            })

            return fetchPosts(user.submitted.slice(0, 30))
        })
        .then((posts) => {
            this.setState({
                posts,
                loadingPosts: false,
                error: null
            })
        })
        .catch(() => {
            console.warn('Error fetching user/posts')

            this.setState({
                error: `There was an error fetching user/posts`
            })
        })
    }
    render() {
      const { user, posts, loadingUser, loadingPosts, error } = this.state

      return (
        <React.Fragment> 
        {error && <p>{error}</p>}

        {loadingUser === true
          ? <Loading />
          : <UserInfo user={user}/>}

        <h1>Posts</h1>
        {loadingPosts === true
          ? <Loading />
          : <PostsList posts={posts}/>}  
        </React.Fragment>
      )  
    }
}