import React, { useState } from 'react';
import './App.css';
import quizQuestions from './quizQuestions';

function App() {
  let [questionIndex, setQuestionIndex] = useState(0);
  let [question, setQuestion] = useState(quizQuestions[questionIndex].question);
  let [options, setOptions] = useState(quizQuestions[questionIndex].options);
  let [correctAnswerIndex, setCorrectAnswerIndex] = useState(quizQuestions[questionIndex].correctAnswer);
  let [selectedOption, setSelectedOption] = useState(null);
  let [numOfCorrect, setNumOfCorrect] = useState(0);
  let [isQuizFinished, setIsQuizFinished] = useState(false);

  function handleClick(){
    setQuestionIndex(()=>questionIndex+1);

    console.log(questionIndex, quizQuestions.length-1,quizQuestions ==quizQuestions.length-1);

    if  (questionIndex == quizQuestions.length-1){
      setIsQuizFinished(true);
      return;
    }

    if ((selectedOption) === correctAnswerIndex){
      setNumOfCorrect(()=>numOfCorrect+1);
    }


    //console.log("num of correct: ",numOfCorrect);
    //console.log("question Index",questionIndex);
    setQuestion(()=>quizQuestions[questionIndex].question);
    setOptions(()=>quizQuestions[questionIndex].options);
    setCorrectAnswerIndex(()=>(quizQuestions[questionIndex].correctAnswerIndex));
  }

  return (
    <div className="App">
      <h1>Simple Quiz Application</h1>
      {isQuizFinished ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score is {numOfCorrect} out of {quizQuestions.length}.</p>
        </div>
      ) : (
        <div>
          <h2>Question No. {questionIndex + 1} of {quizQuestions.length}</h2>
          <h2>{quizQuestions[questionIndex].question}</h2>
          <div>
            {quizQuestions[questionIndex].options.map((o, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={index}
                  name="quizOption"
                  value={o}
                  onChange={(e) => setSelectedOption(parseInt(e.target.id))}
                  checked={selectedOption === index}
                />
                <label htmlFor={index}>{o}</label>
              </div>
            ))}
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );

}

export default App;