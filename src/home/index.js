import React from "react"
import "./styles/style.css"
import "../common/styles/separator.css"
import Welcome from './welcome'
import About from './about'
import LawnImages from './lawnImages'
import Services from './services'
import Testimonies from './testimonies'

export default function Home() {
  return (
    <div className="home-container">
      <Welcome />
      <About />
      <div className="separator"></div>
      <Services />
      <div className="separator"></div>
      <LawnImages />
      {/* <div className="separator"></div>
      <Testimonies /> */}
    </div>
  );
}
