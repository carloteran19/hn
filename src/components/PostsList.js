import React from 'react'
import PropTypes from 'prop-types'

export default function PostsList ({ posts }) {
  return (
    <ul>
      {posts.map((post) => {
         return (
           <li key={post.id} className="post">
             <a className="link" href="">{post.title}</a>
             <div className="meta-info-light">
               <span>by {post.by} on {post.time} with {post.descendants} comments.</span>
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