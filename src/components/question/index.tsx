import React, { useState } from 'react';
import styles from './question.module.css';
import { Remarkable } from 'remarkable';

const md = new Remarkable();

const Question = ({ question }) => {
  const [answer, setAnswer] = useState();
  const [disableInput, setDisableInput] = useState(false);

  const handleChange = e => {
    setAnswer(e.target.value);
    setDisableInput(true)
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: md.render(question.title) }} />
      {question.snippet && (
        <pre className={styles.snippet}>
          <code>{question.snippet}</code>
        </pre>
      )}
      <form>
        <fieldset id="choices" className={styles.choices}>
          {question.choices.map((choice, index) => (
            <div className={styles.choice} key={index}>
              <input className={styles.state} type="radio" name="app" id={choice.key} value={choice.key} disabled={disableInput} onChange={handleChange} />
              <label className={styles.choiceLabel} htmlFor={choice.key}>
                <div className={styles.indicator}></div>
                <span className={styles.text}>{choice.key}: <span className={styles.choiceHTML} dangerouslySetInnerHTML={{ __html: md.render(choice.value) }}></span> </span>
              </label>
            </div>
          ))}
        </fieldset>
      </form>
      {disableInput && (
        answer === question.answer ? (
          <>
            <p>Good answer</p>
            <span dangerouslySetInnerHTML={{ __html: md.render(question.explanation) }} />
          </>
        ) : (
            <>
              <p>bad anwser, good answer was <span dangerouslySetInnerHTML={{ __html: md.render(question.answer) }}></span></p>
              <span dangerouslySetInnerHTML={{ __html: md.render(question.explanation) }} />
            </>
          ))}
    </div>
  )
}

export default Question;