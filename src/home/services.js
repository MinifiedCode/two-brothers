import React, { Component } from 'react'
import './styles/services.css'

export default class services extends Component {
  constructor(props) {
    super(props)

    this.state = {
      services: [
        {id: 1, title: 'Lawn Mowing', features: ['Trimming perimeters', 'Precision edging'], description: 'We care for your lawn'},
        {id: 2, title: 'Lawn Care', features: ['Fertilizing', 'Overseeding'], description: 'We care for your lawn'},
        {id: 3, title: 'Other Services', features: ['Leaf removal', 'Rain gutter cleaning'], description: 'We care for your lawn'}
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
                  <div className="card-details">
                    {
                      service.features.map((feature, index) => (
                        <p key={index} className="feature">• {feature}</p>
                      ))
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
