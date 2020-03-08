import React, { useState } from 'react';

import axios from 'axios';

const CreateQuestionForm = () => {

  const [title, setTitle] = useState('');
  const [snippet, setSnippet] = useState('');
  const [answer, setAnswer] = useState('');
  const [choices, setChoices] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleSubmit = async event => {
    event.preventDefault()

    if (title === '' || answer === '' || choices === '' || explanation === '' ) return;

    await axios.post('/api/create-question', {title, snippet, answer,choices, explanation});

    setTitle('');
    setAnswer('');
    setChoices('');
    setExplanation('');
    setSnippet('');
  }

  return (

    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" id="title" value={title} onChange={event => setTitle(event.target.value)} />
      </label>
      <label>
        Answer:
        <input type="text" name="answer" id="answer" value={answer} onChange={event => setAnswer(event.target.value)} />
      </label>
      <label>
        Explanation:
        <input type="text" name="explanation" id="explanation" value={explanation} onChange={event => setExplanation(event.target.value)} />
      </label>
      <label>
        Snippet:
        <input type="text" name="snippet" id="snippet" value={snippet} onChange={event => setSnippet(event.target.value)} />
      </label>
      <label>
        Choices:
        <input type="text" name="choices" id="choices" value={choices} onChange={event => setChoices(event.target.value)} />
      </label>
      <button>Send</button>
    </form>
  )

}

export default CreateQuestionForm;