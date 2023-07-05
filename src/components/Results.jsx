import React from 'react'
import { useState } from 'react';
import Heading from "./Heading";


// Animation specific modules:
// Animation is made with "Lottie" as json vector path

import Lottie from "lottie-react";
import Congrats from "../assets/Anim_Congrats.json";
import BeBetter from "../assets/Anim_BeBetter.json";
import Button from 'react-bootstrap/Button';


const Results = ({ scoreResult, questionsAmount, handleStart } )  => {
  
  console.log("scoreResults "+ scoreResult + "of " + questionsAmount);

  if (scoreResult === questionsAmount) {

    return (
      <> 
        <Heading/>
        
        <Lottie
        animationData={Congrats}
        loop
        style={{ width: "75vw", height: "50vh" }}
        />

        <div class="app-questcounter">
          <h1>Your scored {scoreResult} of {questionsAmount} correct!</h1>
        
        </div>
  
      <Button variant="primary" onClick={ handleStart }>Restart Quiz!</Button>
        
      </>
  
    );

  }else{

    return (
      <> 
        <Heading/>
        
        <Lottie
        animationData={BeBetter}
        loop
        style={{ width: "75vw", height: "50vh" }}
        />

        <div class="app-questcounter">
          <h1>Your scored {scoreResult} of {questionsAmount} correct!</h1>
          <h1>Be better next time...</h1>
        
        </div>
  
      <Button variant="primary" onClick={ handleStart }>Restart Quiz!</Button>
        
      </>
  
    );


  }


  
}


export default Results;