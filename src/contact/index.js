import './contact.css'
import React, { Component } from 'react'
import axios from 'axios'

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

    let validInput = this.validateInput(fullName, email, message)
    // Proceed if the input is valid
    if (validInput) {
      const contact = { 
          name: fullName,
          email,
          message
      }

      // Create a POST request to send email for contact purposes
      axios.post(`/api/sendEmail`, contact)
        .then(res => {
          if (res.data.messageSuccess) {
            this.clearFields()
            this.setState({
              messageSent: 'Your message was successfully delivered! We will be in touch'
            })
          }
        })
    }

  }
  validateInput = (fullName, email, message) => {
    // Do all fields have a value?
    if (!fullName || !email || !message) return false
    
    // Is the email valid?
    if (!email.includes('@')) return false

    return true
  }

  clearFields = e => {
    if (e) e.preventDefault()
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
        
        {/* FORM CONTAINER */ }
        <form onSubmit={this.handleClick} className="formContainer">

          <h1>Request a Quote</h1>

          {/* NAME CONTAINER */}
          <div className="nameContainer">
            <label>Name <b>*</b></label>
            <br />
            <input className="nameInput" name="fullName" type="text" value={this.state.fullName} onChange={this.onChange} placeholder={'Full name'} />
          </div>
  
          {/* EMAIL CONTAINER */}
          <div className="emailContainer">
            <label>Email <b>*</b></label>
            <br />
            <input className="emailInput" name="email" text="text" placeholder={'your@email.com'} onChange={this.onChange}  value={this.state.email} />
          </div>

          {/* MESSAGE CONTAINER */}
          <div className="messageContainer">
            <label>Message <b>*</b></label>
            <br />
            <input className="messageInput" name="message" text="text" placeholder={'Message'} onChange={this.onChange}  value={this.state.message} />
          </div>

          {/* BUTTONS CONTAINER */}
          <div className="buttonContainer">
            <button id="submit" type="submit">Submit</button>
            <button id="clear" onClick={this.clearFields}>Clear</button>
          </div>

          {this.state.messageSent}
        </form>
      </div>
    )
  }
}