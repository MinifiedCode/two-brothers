import React, { Component } from 'react'
import './styles/testimonies.css'

export default class Testimonies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stars: [1, 2, 3, 4, 5],
      testimonies: [
        { id: 0, userId: 0, user: 'Billy', stars: 3, review: 'Users may enter their own review content through a REST API'},
        { id: 1, userId: 1, user: 'Andrew', stars: 4, review: 'Users may enter their own review content through a REST API'},
        { id: 2, userId: 2, user: 'John', stars: 5, review: 'Users may enter their own review content through a REST API'},
        { id: 3, userId: 3, user: '', stars: 0, review: ''},
        { id: 4, userId: 4, user: 'Jill', stars: 1, review: 'Users may enter their own review content through a REST API'}
      ]
    }
  }

  getStars = stars => {
    return this.state.stars.map(star => {
      if (star <= stars) return <i key={star} className="fa fa-star checked"></i>
      else return <i key={star} className= "fa fa-star"></i>
    })
  }

  render() {
    return (
      <div className="testimonies-container">
        <h1>Testimonies</h1> 
        <div className="reviews">
          {
            this.state.testimonies.map(review => {
              return (
                <div key={review.id} className="review-card">
                  <h3 id="reviewer">{review.user}</h3>
                  <div id="stars">
                    <p>{this.getStars(review.stars)}</p>
                  </div>
                  <p>{review.review}</p>
                </div>
              )
            })
          } 
        </div>       
      </div>
    )
  }
}
