import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const score = useSelector((state) => state.quiz.score);
  const questions = useSelector((state) => state.quiz.questions);

  const calculateCorrectAnswers = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswer === questions[index].userAnswers[0]) {
        correct++;
      }
    });
    return correct;
  };

  return (
    <div>
      <h2>Your Score: {calculateCorrectAnswers()} / {questions.length}</h2>
    </div>
  );
};

export default Result;