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
        {id: 0, src: imageOne, active: false, visibility: 'hidden'},
        {id: 1, src: imageTwo, active: true, visibility: 'visible'},
        {id: 2, src: imageThree, active: false, visibility: 'hidden'},
        {id: 3, src: imageOne, active: false, visibility: 'hidden'},
      ] 
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state)
  }

  getActiveImage = (image, nextImage) => {
    image.active = false
    image.visibility = 'hidden'
    nextImage.active = true
    nextImage.visibility = 'visible'
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

  render() {
    let {images} = this.state
    return (
      <div className="images-container">
        <div className="images">
          <img alt="Lawns that we mow!" className="image" style={{visibility: images[0].visibility}} src={images[0].src}></img>
          <img alt="Lawns that we mow!" className="image" style={{visibility: images[1].visibility}} src={images[1].src}></img>
          <img alt="Lawns that we mow!" className="image" style={{visibility: images[2].visibility}} src={images[2].src}></img>
          <img alt="Lawns that we mow!" className="image" style={{visibility: images[3].visibility}} src={images[3].src}></img>
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
                <li className="image-bullet"></li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
