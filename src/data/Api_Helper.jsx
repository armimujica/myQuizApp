import React from 'react';

const TriviaAPILocal = () => {

  const shuffleArray = (array) => {

    const shuffled = array.map(value => ({ value, sort: Math.random() }))
    shuffled.sort((a, b) => a.sort - b.sort)
    
    return shuffled.map(({ value }) => value)
    
  }
    
  const data =
  [
      {
        "category":"General Knowledge",
        "type":"boolean",
        "difficulty":"easy",
        "question":"Pluto is a planet.",
        "correct_answer":"False",
        "incorrect_answers":[
            "True"
        ]
      },
      {
        "category":"General Knowledge",
        "type":"multiple",
        "difficulty":"easy",
        "question":"What do the letters of the fast food chain KFC stand for?",
        "correct_answer":"Kentucky Fried Chicken",
        "incorrect_answers":[
            "Kentucky Fresh Cheese",
            "Kibbled Freaky Cow",
            "Kiwi Food Cut"
        ]
      },
      {
        "category":"General Knowledge",
        "type":"multiple",
        "difficulty":"easy",
        "question":"Which of the following is not the host of a program on NPR?",
        "correct_answer":"Ben Shapiro",
        "incorrect_answers":[
            "Terry Gross",
            "Ira Glass",
            "Peter Sagal"
        ]
      },
      {
        "category":"General Knowledge",
        "type":"multiple",
        "difficulty":"easy",
        "question":"Which of the following blood component forms a plug at the site of injuries?",
        "correct_answer":"Platelets",
        "incorrect_answers":[
            "Red blood cells",
            "White blood cells",
            "Blood plasma"
        ]
      },
      {
        "category":"General Knowledge",
        "type":"multiple",
        "difficulty":"easy",
        "question":"Which of these Marvel games was released on the Playstation 2?",
        "correct_answer":"Spider-Man 2",
        "incorrect_answers":[
            "Silver Surfer",
            "Howard the Duck",
            "Wolverine: Adamantium Rage"
        ]
      }
  ]

  }

export default TriviaAPILocal;
