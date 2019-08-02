import React, { Component } from 'react'
import './footer.css'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  handleClick = () => {
    console.log('click')
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <h1>{this.props.company}</h1>
          <div id="social-media">
            <i onClick={this.handleClick} id="github-icon" class="fa fa-github fa-2x" aria-hidden="true"></i>
            <i id="facebook-icon" class="fa fa-facebook fa-2x" aria-hidden="true"></i>
            <i id="twitter-icon" class="fa fa-twitter fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  company: PropTypes.string
}