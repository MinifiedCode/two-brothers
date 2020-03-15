import './contact.css'
import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      email: '',
      message: ''
    }
  }

  onChange = e => {
    console.log(e.target.name)
    this.setState({
      fullName: e.target.value
    })
  }
  
  render() {
    return (
      <div className="contactContainer">
        <form className="formContainer">
          <h1>Request a Quote</h1>
          <div className="nameContainer">
            <label><strong>Name (required): </strong></label>
            <br />
            <input className="nameInput" name="fullName" type="text" value={this.state.fullName} onChange={this.onChange} placeholder={'Full name'} />
          </div>
  
          <div className="emailContainer">
            <label><strong>Email (required): </strong></label>
            <br />
            <input className="emailInput" name="email" text="text" placeholder={'your@email.com'} value={this.state.email} />
          </div>
  
          <div className="messageContainer">
            <label><strong>Message (required): </strong></label>
            <br />
            <input className="messageInput" name="message" text="text" placeholder={'Message'} value={this.state.message} />
          </div>

          <div className="buttonContainer">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}