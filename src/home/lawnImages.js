import React, { Component } from 'react'
import './styles/lawnImages.css'
import imageOne from '../img/lawns-serviced/photo-one.jpg'
import imageTwo from '../img/lawns-serviced/photo-two.jpg'
import imageThree from '../img/lawns-serviced/photo-three.jpg'

export default class lawnImages extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      images: [
        {id: 0, src: imageOne, active: false, visibility: 'hidden', activeStyle: 'inactive'},
        {id: 1, src: imageTwo, active: true, visibility: 'visible', activeStyle: 'active'},
        {id: 2, src: imageThree, active: false, visibility: 'hidden', activeStyle: 'inactive'},
        {id: 3, src: imageOne, active: false, visibility: 'hidden', activeStyle: 'inactive'},
      ] 
    }
  }

  getActiveImage = (image, nextImage) => {
    image.active = false
    image.visibility = 'hidden'
    image.activeStyle = 'inactive'
    nextImage.active = true
    nextImage.visibility = 'visible'
    nextImage.activeStyle = 'active'
    return true
  }

  handleClick = e => {
    e.preventDefault()

    let direction = e.target.className === 'arrow-right' || e.target.id === 'right-facing'
      ? 1
      : -1

    let images = this.state.images
    images.loopInProgress = true

    for (let i = 0; i < images.length; i++) {
      if (images[i].active && images.loopInProgress) {
        if (i+direction >= this.state.images.length || i+direction < 0) return 'MAX_LIMIT_REACHED'
        else if (this.getActiveImage(images[i], images[i+direction]))
          images.loopInProgress = false
      }
    }

    this.setState({
      images
    })
  }

  handleBulletClick = e => {
    e.preventDefault()
    let images = this.state.images
    let id = e.target.id
    for (let i = 0; i < images.length; i++) 
      if (i !== id) {
        images[i].active = false
        images[i].visibility = 'hidden'
        images[i].activeStyle = 'inactive'
      }

    images[id] = {
      ...this.state.images[id],
      active: true,
      visibility: 'visible',
      activeStyle: 'active'
    }

    this.setState({
      images
    })
  }

  render() {
    let {images} = this.state
    return (
      <div className="images-container">
        <div className="images">
          {
            images.map(image => {
              let active = image.activeStyle
              return (
                <img 
                  key={image.id}
                  alt="Lawns that we mow!" 
                  className={`image image-${active}`} 
                  src={image.src}
                />
              )
            })
          }
        </div>

        <div id="container-left">
          <div onClick={this.handleClick} className="arrow-left">
            <p id="left-facing">{'<'}</p>
          </div>
        </div>

        <div id="container-right">
          <div onClick={this.handleClick} className="arrow-right">
            <p id="right-facing">{'>'}</p>
          </div>
        </div>

        <p id="image-descriptor">What we've done</p>
        <div id="bullet-point-container">
          <ul id="image-bulleted-navigation">
            {this.state.images.map(image => {
              return (
                <li key={image.id} id={image.id} className={`image-bullet active-${image.active}`} onClick={this.handleBulletClick}></li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
