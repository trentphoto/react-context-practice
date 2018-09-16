import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import { Consumer } from '../../context'

import TextInputGroup from '../layout/TextInputGroup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddContact extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      err: {
        name: false,
        email: false,
        phone: false
      }
    }
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onFocus = (e) => {
    const prev = this.state.err
    prev[e.target.name] = false
    this.setState({err: prev })
  }

  onBlur = (e) => {
    this.validate(e)
  }

  validate = (e) => {
    if (e.target.value === '') {
      const prev = this.state.err
      prev[e.target.name] = true
      this.setState({err: prev})
    }
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault()
    const { name, email, phone, err } = this.state

    if (err.name || err.email || err.phone) {
      // do nothing
    } else {
      const newContact = {
        name,
        email,
        phone
      }

      const res = await axios.post('https://jsonplaceholder.typicode.com/users/', newContact)

      dispatch({type: 'ADD_CONTACT', payload: res.data})



      this.setState({
        name: '',
        email: '',
        phone: '',
        nameErr: false,
        emailErr: false,
        phoneErr: false,
      })

      this.props.history.push('/')
    }
  }

  render () {
    const { name, email, phone } = this.state

    return (
      <Consumer>
        {
          value => {
            const { dispatch } = value
            return (
              <React.Fragment>
                <div className="card mb-3">
                  <div className="card-header">Add Contact</div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <TextInputGroup
                        name="name"
                        label="Name"
                        placeholder="Enter Name..."
                        value={name}
                        onChange={this.onChange}
                        err={this.state.err.name}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        />
                      <TextInputGroup
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter Email..."
                        value={email}
                        onChange={this.onChange}
                        err={this.state.err.email}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        />
                      <TextInputGroup
                        name="phone"
                        label="Phone"
                        placeholder="Enter Phone..."
                        value={phone}
                        onChange={this.onChange}
                        err={this.state.err.phone}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        />
                      <input type="submit" value="Add Contact" className="btn btn-block btn-danger" />
                    </form>
                  </div>
                </div>
                <Link to="/" className="btn btn-light">
                  <FontAwesomeIcon icon="caret-left" className="mr-2" />
                  Back to Contacts
                </Link>
              </React.Fragment>
            );
          }
        }
      </Consumer>
    );
  }
}

export default AddContact;
