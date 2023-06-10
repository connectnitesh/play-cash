import React from 'react'
import { useState } from 'react';
import './style.css'
import Timer from './Timer';
import mobile from '../images/mobile_t.webp';
import bulb from '../images/idea2.gif'
import tria from '../images/ai-brand.png'
import jud from '../images/judges_t.png'
import vot from '../images/vote_t.png'
import mon from '../images/launch_t.png'
import playwin from '../images/play-to-win.png'
import Navbar from './Navbar';
import Footer from './Footer';


const Header = () => {

  return (
    <>
    <div className="header">
    <Navbar />

    <div className="container-win">
      <h2>WIN</h2>
      <h5>Your Idea into FREE Cash</h5>
    </div>
<div class="container">
  <div class="box box1">
    <h5 className='imt'>For Top 3 Ideas</h5>
    <h4 className='im1'>₹ 15 Lacs</h4>
    <h4 className='im2'>₹ 10 Lacs</h4>
    <h4 className='im3'>₹ 5 Lacs</h4>
    <button class="centered-button"><a href="#">Submit an Idea</a></button>
    <div class="timer">Contest ends in :  <span id="contest-timer"><Timer /></span> </div>
  </div>
  <div class="box box2">
  <h5 className='imt'>+</h5>
    <h4 className='im1'>Win a New BYD e6</h4>
    <h4 className='im2'> </h4>
    <h4 className='im3'>EV worth ₹ 3000000</h4>
    <button class="centered-button" > <a href='https://playtowin.win/demo' target="_blank">Play to Win</a></button>
    <div class="timer">Game starts in :  <span id="game-timer"><Timer /></span></div>
  </div>
</div>
</div>



    <div className="container-how">
      <h2 className="heading-how">How It Works</h2>
      <div className="box-how-container">
        <div className="box-how">
          <img src={mobile} alt="Login" />
          <p>Login with your mobile number and OTP</p>
        </div>
        <div className="box-how">
          <img src={bulb} alt="Submit Idea" />
          <p>Submit your idea for Rs 100 evaluation fee</p>
        </div>
        <div className="box-how">
          <img src={tria} alt="AI System" />
          <p>Our AI system will filter and rank the ideas</p>
        </div>
        <div className="box-how">
          <img src={jud} alt="Judges" />
          <p>Our Panel of Judges will vote on the top 3 ideas</p>
        </div>
        <div className="box-how">
          <img src={vot} alt="Participant Vote" />
          <p>Participants can vote for the top 3 ideas</p>
        </div>
        <div className="box-how">
          <img src={mon} alt="Convert Idea" />
          <p>Free money to convert your idea into a business</p>
        </div>
      </div>
    </div>

    <div className="idea-gen">
      <div className="ideagen-head">
        <h3>Struggling to come up with an Idea ?</h3>
        <h5>Use our <a href="/idea-generator">AI based Idea Generator</a> to come up with something that works for you. Pick the idea you like the most by clicking on it to copyt the text, and submit it by clicking <span>"Submit an Idea"</span> above.</h5>
        <h3>No Idea? Still want to Win a Car?</h3>
        <div className="win-a-car">
          <div className="win-left">
            <h5>Visit <a href="">Play To Win</a></h5>
            <h5>Choose your Price to Win the Price & the Prize</h5>
            <h5>Upto 99.9% Discount*</h5>
          </div>
          <div className="win-right">
            <img src={playwin} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  
    <Footer />
    </>
  )
}

export default Header