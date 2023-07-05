import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import shuffleArray from './data/Api_Helper'

import Heading from "./components/Heading";
import Starter from "./components/Starter";
import Trivia from "./components/Trivia";
import Results from "./components/Results";

import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import {CSSTransition} from 'react-transition-group';


export default function App()
{
  
  // Arrays and objects for the trivia game:
  const [questions, setQuestions] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalQuestion, setFinalQuestion] = useState(false);
  const [progress, setProgress] = React.useState(0);
  const [score, setScore] = useState(0);

  // for UI state changes and Animations:

  const [showStart, setShowStart] = useState(true);
  const [showTrivia, setShowTrivia] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [swipe, setSwipe] = useState(false);

  // API settings
  const trivia_amount = 5;
  const category = 9; // Category 9 = general
  const difficulty = 'easy';
  const url = `https://opentdb.com/api.php?amount=${trivia_amount}&category=${category}&difficulty=${difficulty}`;


  // load Questions from API
  useEffect(() => {
    if (showStart) {
    
      async function fetchQuestions() {

        
        const response = await fetch(url);
        const data = await response.json();

        data.results.map((question) => 
        ({
          ...question,
          answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
          ]),
        }));


        setQuestions(data.results);
      }

      fetchQuestions();
    }

  }, []);

    // we need to koad an API again for reset (new Game)- its not bound to useEffect, so manual call
  const handleRefresh = () => {
    const fetchQuestions = async () => {
        
      const response = await fetch(url);
      const data = await response.json();

      data.results.map((question) => 
      ({
        ...question,
        answers: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      }));


      setQuestions(data.results);
    }

    fetchQuestions();
  }



  // Helper objects for partial rendering
 
  const handleStart = () => {
    // we restart a new quiz, so we must reset variables:
    setCurrentQuestion(0);
    setScore(0);
    setFinalQuestion(false);
    setProgress(0);
    setQuestions([]);
    handleRefresh();

    setShowStart(true);
    setShowTrivia(false);
    setShowResults(false);
  };

  const handleTrivia = () => {
    setShowStart(false);
    setShowTrivia(true);
    setShowResults(false);
    //console.log(questions);
  };

  const handleResults = () => {
    setShowStart(false);
    setShowTrivia(false);
    setShowResults(true);
  };


  const checkAnswer = (selectedOption) => {
    // check if answer is right, then add to score

    if (selectedOption === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    // if it's not he last question, show the next one
    if (currentQuestion < questions.length - 1) {
      //console.log("Lenght: " + questions.length  + " current: " + currentQuestion+1);
      setCurrentQuestion(currentQuestion + 1);
      setSwipe(true)
      setProgress(progress + (100 / questions.length) )


    } else 
    // it is the last question, so now give the chance to see the scores!
    {
      setProgress(100);
      setFinalQuestion(true);
      //console.log ("TRIVIA Module Score: "+ score);
    }
  }

  const handleTransitionEnd = () => {
    setSwipe(false);
  }

  // the magic render loop:
  return (
    <div className="app-container">

      { 

        showStart  ?  ( < Starter handleTrivia={handleTrivia} /> ) : 
        showTrivia ?  (
          <><div>
              <Heading />

              <div>

                  {questions.length > 0 && (

                    <><div class="app-questcounter">
                      <h1>Question {currentQuestion + 1} of {questions.length}</h1>
                      <ProgressBar striped animated now={progress} />
                    </div>
                    
                    <div className={`container${swipe ? ' swipe' : ''}`} onTransitionEnd={handleTransitionEnd}>

                      <div className={`app-trivia ${finalQuestion ? 'hidden' : 'visible'}`}>
                        <div class="app-answers"><p dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}></p>
                          <div>
                            <ul>
                              <div>
                                {questions[currentQuestion].incorrect_answers.concat(questions[currentQuestion].correct_answer).sort().map((answer, index) => (
                                  <li key={index} onClick={() => checkAnswer(answer)} dangerouslySetInnerHTML={{ __html: answer }}></li>
                                )
                                )}
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>


                    </>
                  )}

            </div>

            
            <Trivia vis={finalQuestion} setVis={setFinalQuestion} handleResults={handleResults} />
            
        </div>
        </>
        ) : 
        showResults ? ( < Results scoreResult={score} questionsAmount={questions.length} handleStart={handleStart} />) : 
        ( <p>No component to render</p>)
      
        
      }

    </div>
  );

}





  