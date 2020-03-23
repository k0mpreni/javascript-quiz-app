import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Link } from "gatsby"

import styles from './question.module.css';
import { Remarkable } from 'remarkable';
import Prism from "prismjs"

const md = new Remarkable({html: true});

const Question = ({ question }) => {
  const [answer, setAnswer] = useState();
  const [disableInput, setDisableInput] = useState(false);

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const handleChange = e => {
    setAnswer(e.target.value);
    setDisableInput(true)
  }

  const nextQuestion = +question.id + 1


  return (
    <div className={styles.content}>
      <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: md.render(question.title) }} />
      {question.snippet && (
        <div className={styles.snippetWrapper}>
          <pre className={styles.snippet}>
            <code className="language-javascript">{question.snippet}</code>
          </pre>
        </div>
      )}
      <form>
        <fieldset id="choices" className={styles.choices}>
          {question.choices.map((choice, index) => (
            <div className={cx(styles.choice, { [styles.wrong]: disableInput && choice.key !== question.answer && answer === choice.key, [styles.correct]: disableInput && choice.key === question.answer })} key={index}>
              <input className={styles.input} type="radio" name="app" id={choice.key} value={choice.key} disabled={disableInput} onChange={handleChange} />
              <label className={styles.choiceLabel} htmlFor={choice.key}>
                <span className={styles.choiceHTML} dangerouslySetInnerHTML={{ __html: md.render(choice.value) }}></span>
              </label>
            </div>
          ))}
        </fieldset>
      </form>
      {disableInput && (
        <div className={styles.explanation}
          dangerouslySetInnerHTML={{ __html: md.render(question.explanation) }} />
      )}
      <Link className={styles.link} to={nextQuestion === 145 ? `/` : `/${nextQuestion}`}>Go to next question</Link>
    </div>
  )
}

export default Question;