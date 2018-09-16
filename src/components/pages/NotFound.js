import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <div>
      <h1>Page not found.</h1>
      <Link exact to="/" className="btn btn-danger">
        <FontAwesomeIcon icon="home" className="mr-2" />
        Go home?
      </Link>
    </div>
  )
}
