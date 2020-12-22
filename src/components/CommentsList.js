import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/helpers'
import { NavLink } from 'react-router-dom'

export default function CommentsList ({ comments }) {
  return (
    <React.Fragment>
      {comments.map((comment) => {
         return (
            <div className='comment'>
              <span>by  <NavLink to={`/user?id=${comment.by}`} className='link'> {comment.by} </NavLink></span>
              <span>on {formatDate(comment.time)}</span>
              <p dangerouslySetInnerHTML={{__html: comment.text}} />
            </div>
         ) 
      })}
    </React.Fragment>
  )
}
  
CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
}  