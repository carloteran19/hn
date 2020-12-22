import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/helpers'
import { ThemeConsumer } from '../contexts/theme'

export default function PostInfo ({ post }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`meta-info-${theme}`}>
          <h1 className='header'>{post.title}</h1>
          <span>by {post.by}</span>
          <span>on {formatDate(post.time)}</span>
          {typeof post.descendants === 'number' && (
            <span>
              with {post.descendants} comments
            </span>
          )}
        <p dangerouslySetInnerHTML={{__html: post.text}} />
        </div>
      )}
    </ThemeConsumer>
  )
}
  
PostInfo.propTypes = {
  post: PropTypes.string.isRequired
}