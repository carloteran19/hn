import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/helpers'
import { NavLink } from 'react-router-dom'

export default function PostsList ({ posts }) {
  return (
    <ul>
      {posts.map((post) => {
         return (
           <li key={post.id} className="post">
             <a className="link" href={post.url}>{post.title}</a>
             <div className="meta-info-light">
               <span>by <NavLink to={`/user?id=${post.by}`} className='link'> {post.by} </NavLink> </span>
               <span>on {formatDate(post.time)} </span>
               <span>with <NavLink to={`/post?id=${post.id}`} className='link'> {post.descendants} </NavLink> comments.</span>
             </div>
           </li>
         ) 
      })}
    </ul>
  )
}
  
PostsList.propTypes = {
  posts: PropTypes.array.isRequired
}