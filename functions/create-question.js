const sendQuery = require('./utils/sendQuery');
const graphql = require('graphql');

const CREATE_QUESTION = `
mutation($title: String!, $explanation: String!, $snippet: String, $answer: String!, $choices: [ChoicesInput]!) {
  createQuestion(data: {
    title: $title
    explanation: $explanation,
    snippet: $snippet,
		answer: $answer,
    choices: {
      create: $choices
    }
  }) {
    _id
    explanation
    answer
    title
    snippet
    choices {
      data {
        key
        value
      }
    }
  }
}
`

exports.handler = async event => {
  const {
    explanation,
    answer,
    title,
    snippet,
    choices
  } = JSON.parse(event.body);

  const {
    data,
    errors
  } = await sendQuery(CREATE_QUESTION, {
    explanation,
    answer,
    title,
    snippet,
    choices
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      newQuestion: data.createQuestion
    })
  }
}