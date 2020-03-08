import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import axios from 'axios';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question";
import CreateQuestionForm from "../components/createQuestionForm";

const IndexPage = () => {
  const [status, setStatus] = useState('loading');
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    let cancelled = false;
    if (status !== "loading") return;

    axios('/api/get-all-questions').then(result => {
      if (cancelled === true) return;

      if (result.status !== 200) {
        console.error("Error loading question")
        console.error(result);
        return;
      }

      setQuestions(result.data.questions);
      setStatus("loaded");
    })

    return () => { cancelled = true };
  }, [status]);

  return (
    <Layout>
      <SEO title="Home" />

    <CreateQuestionForm />


      {questions ?
        questions.map(question =>
          (
            <Question question={question} key={question._id}/>
          )
        )
        : (<p>Loading</p>)}
    </Layout>
  )
}

export default IndexPage
