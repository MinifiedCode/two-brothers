import React, { Component } from 'react'
import './styles/about.css'
import NavButton from '../common/NavButton'

let text = `
Two Brothers Lawn Care is a local, family owned business started by brothers Mike and Chris Hurtt. 
With 12 years of dedication to the Wichita community, Two Brothers aims to treat you as if you're apart of the family and to care for your lawn as if it were their own. 
`

/*
Button.propTypes = {
  active: PropTypes.string,
  exact: PropTypes.bool,
  type: PropTypes.string,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
*/

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>What We're About</h1>
        <p className="text-content">{text}</p>
        <br />
        <p className="text-content">Contact us today for more information</p>
        <div id="mower-img"></div>
        {/* <div id="learn-more">
          <NavButton path="/about" exact={false} type="info"  text="Learn More" />
        </div> */}
      </div>
    )
  }
}
