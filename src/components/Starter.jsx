import React from "react";
import { useState } from 'react';
import Heading from "./Heading";

// Animation specific modules:
// Animation is made with "Lottie" as json vector path

import Lottie from "lottie-react";
import Anim from "../assets/Anim_Start.json";
import Button from 'react-bootstrap/Button';

export default function Start(props)
{

  return (
      <> 
        <Heading/>
        
        <Lottie
        animationData={Anim}
        loop
        style={{ width: "75vw", height: "50vh" }}
        />

        <Button variant="primary" onClick={ props.handleTrivia }>Start Quiz!</Button>
        
      </>

  );
}
  

  