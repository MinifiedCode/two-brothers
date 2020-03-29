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
    let propertyName = e.target.name
    let value = e.target.value
    let currentState = this.state
    currentState[propertyName] = value
    this.setState(currentState)
  }

  handleClick = e => {
    e.preventDefault()
    let fullName = this.state.fullName
    let email = this.state.email
    let message = this.state.message

    console.log(this.validateInput(fullName, email, message))
    console.log(this.state)
  }

  validateInput = (fullName, email, message) => {
    // Do all fields have a value?
    if (!fullName || !email || !message) return false
    
    // Is the email valid?
    if (!email.includes('@')) return false

    return true
  }

  clearFields = e => {
    e.preventDefault()
    this.setState({
      fullName: '',
      email: '',
      message: ''
    })
  }
  
  render() {
    return (
      <div className="contactContainer">
        <p id="testCharges">Our charges are based on the size of your yard and complexity of your needs.  Call or e-mail us for a free, friendly and fair estimate.</p>
        <form className="formContainer">
          <h1>Request a Quote</h1>
          <div className="nameContainer">
            <label>Name <b>*</b></label>
            <br />
            <input className="nameInput" name="fullName" type="text" value={this.state.fullName} onChange={this.onChange} placeholder={'Full name'} />
          </div>
  
          <div className="emailContainer">
            <label>Email <b>*</b></label>
            <br />
            <input className="emailInput" name="email" text="text" placeholder={'your@email.com'} onChange={this.onChange}  value={this.state.email} />
          </div>
  
          <div className="messageContainer">
            <label>Message <b>*</b></label>
            <br />
            <input className="messageInput" name="message" text="text" placeholder={'Message'} onChange={this.onChange}  value={this.state.message} />
          </div>

          <div className="buttonContainer">
            <button id="submit" onClick={this.handleClick} type="submit">Submit</button>
            <button id="clear" onClick={this.clearFields}>Clear</button>
          </div>
        </form>
      </div>
    )
  }
}