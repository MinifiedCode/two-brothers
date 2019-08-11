import React, { Component } from 'react'
import './styles/features.css'

export default class features extends Component {
  constructor(props) {
    super(props)

    this.state = {
      features: [
        'Lawn Care',
        'Lawn Mowing',
        'More Lawn Stuff'
      ]
    }
  }

  render() {
    return (
      <div className="features-container">
        <h1>Our Services</h1>
        <div className="features-list">
          {
            this.state.features.map(feature => {
              return (
                <div className="card">
                  <p className="card-header">{feature}</p>
                  <p className="card-separator"></p>
                  <p className="card-details">This will detail your service however you wish.</p>
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
