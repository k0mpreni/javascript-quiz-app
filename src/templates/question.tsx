import React from "react";
import Question from "../components/question";


const QuestionTemplate = ({pageContext}) => {
  const {question} = pageContext;

  return (
    <Question question={question} />
  )
}

export default QuestionTemplate