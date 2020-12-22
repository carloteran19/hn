import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/helpers'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'

export default function PostInfo ({ post }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`meta-info-${theme}`}>
          <a className='link' href={post.url}><h1 className='header'>{post.title}</h1></a>
          <span>by <NavLink to={`/user?id=${post.by}`} className='link'> {post.by} </NavLink> </span>
          <span>on {formatDate(post.time)}</span>
          <span>with <NavLink to={`/post?id=${post.id}`} className='link'> {post.descendants} </NavLink> comments.</span>
        <p dangerouslySetInnerHTML={{__html: post.text}} />
        </div>
      )}
    </ThemeConsumer>
  )
}
  
PostInfo.propTypes = {
  post: PropTypes.string.isRequired
}