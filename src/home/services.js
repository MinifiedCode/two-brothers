import React, { Component } from 'react'
import './styles/services.css'

export default class services extends Component {
  constructor(props) {
    super(props)

    this.state = {
      services: [
        {id: 1, title: 'Lawn Care', description: 'We care for your lawn'},
        {id: 2,title: 'Lawn Mowing', description: 'We care for your lawn'},
        {id: 3,title: 'More Lawn Stuff', description: 'We care for your lawn'}
      ]
    }
  }

  render() {
    return (
      <div className="features-container">
        <h1>Our Services</h1>
        <div className="features-list">
          {
            this.state.services.map(service => {
              return (
                <div className="card" key={service.id}>
                  <p className="card-header">{service.title}</p>
                  <p className="card-separator" />
                  <p className="card-details">{service.description}</p>
                  <div className="card-button"><p>Learn More</p></div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
