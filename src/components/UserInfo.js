import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../utils/helpers'

export default function UserInfo ({ user }) {
  return (
    <React.Fragment>
      <h1 className='header'>{user.id}</h1>
      <div className='meta-info-light'>
        <span>joined <b>{formatDate(user.created)}</b></span>
        <span>has <b>{user.karma.toLocaleString()}</b> karma</span>
      </div>
      <p dangerouslySetInnerHTML={{__html: user.about}} />
    </React.Fragment>
  )
}
  
UserInfo.propTypes = {
  user: PropTypes.string.isRequired
}