import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Consumer } from '../../context'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      showContactInfo: false
    }
  }

  static propTypes = {
    contact: PropTypes.object.isRequired,
  }

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

    dispatch({type: 'DELETE_CONTACT', payload: id})

  }

  render () {
    const { name, email, phone, id } = this.props.contact
    const { showContactInfo } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card card-body mb-3" onClick={() => this.setState((prev) => ({ showContactInfo: !prev.showContactInfo }))}>
              <h4>
                {name}
                <FontAwesomeIcon icon="sort-down" />
                <FontAwesomeIcon
                  icon="times"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{float: 'right', color: 'red'}}
                />
                <Link to={`/contact/edit/${id}`}>
                  <FontAwesomeIcon
                    icon="pencil-alt"
                    style={{float: 'right', marginRight: '1rem'}}
                  />
                </Link>
              </h4>
              { showContactInfo && (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}


export default Contact;
