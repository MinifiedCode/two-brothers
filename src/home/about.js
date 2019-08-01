import React, { Component } from 'react'
import './about.css'
import mower from '../img/lawn-mower.jpg'
import Button from '../common/Button'

let text = `
  rem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum felis neque, pretium eget augue at, egestas rhoncus augue. Nunc vehicula vel purus viverra tempor. Curabitur rutrum finibus accumsan. Nunc dignissim tincidunt nisl at consequat. Fusce eu porttitor enim. Vestibulum nec ligula nec elit maximus hendrerit. Donec viverra dui ut pharetra pretium. Fusce sollicitudin id lectus pharetra aliquam. Ut gravida ligula eu nisi posuere, vel faucibus metus gravida. Cras euismod mollis ipsum, vitae tristique nibh viverra sed.
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
        <h1><i id="underline">What we're about</i></h1>
        <p>{text}</p>
        <img id="mower-img" src={mower} />
        <div id="learn-more">
          <Button path="/about" exact="false" type="info"  text="Learn More" />
        </div>
      </div>
    )
  }
}
