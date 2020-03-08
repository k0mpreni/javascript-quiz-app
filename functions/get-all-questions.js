const sendQuery = require('./utils/sendQuery')

const GET_ALL_QUESTIONS = `
  query {
    allQuestions {
      data {
        _id
        snippet
        title
        explanation
        answer
        choices {
          data {
            value
            key
          }
        }
      }
    }
  }
`;


exports.handler = async () => {
  const {
    data,
    errors
  } = await sendQuery(GET_ALL_QUESTIONS);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      questions: data.allQuestions.data
    })
  }
}