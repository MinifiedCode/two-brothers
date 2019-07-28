import React from 'react'
import './style.css'
import background from '../img/background-2.jpeg'

export default function Home() {
  return (
    <div>
      <div id="container">
        <img id="bg" alt="background" src={background} />
        <div className="content">
          <div className="slogan-container">
            <h1 id="welcome">Welcome to Two Brothers Lawn Care</h1>
            <p id="motto"><i>Where speed is no longer a question</i></p>
          </div>
        </div>
      </div>
    </div>
  )
}
