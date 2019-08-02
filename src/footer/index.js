import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  handleClick = () => {
    console.log('click')
  }
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <h1>Footer</h1>
          <i onClick={this.handleClick} class="fa fa-github fa-3x" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}
