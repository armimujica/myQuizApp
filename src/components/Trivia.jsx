import React from 'react'
import { useState } from 'react';

import Button from 'react-bootstrap/Button';

const Trivia = ({ vis, setVis, handleResults } )  => {


        return (
        <div > 

        
        <Button variant="primary" className={`button ${!vis ? 'hidden' : 'visible'}`} onClick={ handleResults }>Show Results</Button>
        

        </div>
     );
};

export default Trivia;

