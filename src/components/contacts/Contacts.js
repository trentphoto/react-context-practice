import React from 'react'
import { Link } from 'react-router-dom'

import { Consumer } from '../../context'

import Contact from './Contact'

class Contacts extends React.Component {
  render () {
    return (
      <Consumer>
        {value => {
          const { contacts } = value
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
              {
                contacts.map(i => <Contact key={i.id} contact={i} />)
              }
              <Link to="/contact/add" className="btn btn-danger">Add Contact</Link>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
