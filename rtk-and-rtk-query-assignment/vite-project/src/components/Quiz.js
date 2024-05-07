import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitAnswer, skipQuestion } from '../store/quizSlice';
import { useGetQuizQuery } from '../api/quizApi';

const Quiz = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data: questions } = useGetQuizQuery();
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const userAnswers = useSelector((state) => state.quiz.userAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    if (questions) {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [questions, currentQuestionIndex]);

  const handleAnswerSubmit = (answer) => {
    dispatch(submitAnswer({ answer }));
  };

  const handleSkipQuestion = () => {
    dispatch(skipQuestion());
  };

  if (isLoading) return <p>Loading quiz...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!currentQuestion) return null;

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}: {currentQuestion.text}</h2>
      <ul>
        {currentQuestion.options.map((option) => (
          <li key={option}>
            <button onClick={() => handleAnswerSubmit(option)}>{option}</button>
          </li>
        ))}
      </ul>
      <button disabled={currentQuestionIndex === questions.length - 1} onClick={handleSkipQuestion}>
        Skip Question
      </button>
    </div>
  );
};

export default Quiz;