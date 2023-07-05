import React from 'react';
import { useState } from 'react';


// The API delivers a JSON like:
/*

{
    "response_code": 0,
    "results": [
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Whistler was the codename of this Microsoft Operating System.",
            "correct_answer": "Windows XP",
            "incorrect_answers": [
                "Windows 2000",
                "Windows 7",
                "Windows 95"
            ]
        },

so we need to use a similiar data structure:
the question object contains the correct answers, and all other (incorrect ones), which should be shown as possible answers    

*/



const TriviaAPI = async (amount, category, difficulty) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
  const data = await response.json();

  const questions = data.results.map(q => {
        const options = shuffle([...q.incorrect_answers, q.correct_answer])
        return { 
                    question: q.question, 
                    possbile_answers: options, 
                    selected_answer: undefined, 
                    correct_answer: q.correct_answer 
              }
  })

  return questions;
}

export default TriviaAPI;