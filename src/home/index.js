import React from "react";
import "./styles/style.css";
import Welcome from './welcome'
import About from './about'
import Separator from '../common/Separator'
import LawnImages from './lawnImages'
import Features from './features'

export default function Home() {
  return (
    <div className="home-container">
      <Welcome />
      <About />
      <Separator />
      <LawnImages />
    </div>
  );
}
