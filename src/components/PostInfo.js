import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/helpers'

export default function PostInfo ({ post }) {
  return (
    <React.Fragment>
      <h1 className='header'>{post.title}</h1>
      <div className={`meta-info-light`}>
        <span>by {post.by}</span>
        <span>on {formatDate(post.time)}</span>
        {typeof post.descendants === 'number' && (
          <span>
            with {post.descendants} comments
          </span>
        )}
      </div>
      <p dangerouslySetInnerHTML={{__html: post.text}} />
    </React.Fragment>
  )
}
  
PostInfo.propTypes = {
  post: PropTypes.string.isRequired
}