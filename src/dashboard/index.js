import React, { Component } from 'react'
import './dashboard.css'
import Button from '../common/Button'

import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  isAuth: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true
    netlifyIdentity.open()
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user)
    })
  }
}

export default class Dashboard extends Component {
  handleClick = e => {
    netlifyAuth.authenticate(() => {
      console.log('signed in')
    })
  }

  render() {
    return (
      <div className="dashboard">
        <Button className="btn-login" text="Login" handleClick={this.handleClick} />
      </div>
    )
  }
}
