import React, { Component } from 'react'
import './dashboard.css'
import Button from '../common/Button'
import { withRouter } from 'react-router-dom'
import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  isAuth: false,
  user: null,
  authenticate(callback) {
    this.isAuth = true
    netlifyIdentity.open()
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user)
    })
  }
}

class Dashboard extends Component {
  handleClick = e => {
    netlifyAuth.authenticate(() => {
      console.log('auth')
      netlifyAuth.isAuth = true;
    })
  }

  render() {
    console.log(netlifyAuth.user)
    return (
      <div className="dashboard">
        {netlifyAuth.isAuth 
          ? <p>You are logged in</p>
          : <Button className="btn-login" text="Login" handleClick={this.handleClick} />
        }
      </div>
    )
  }
}

export default withRouter(Dashboard)
