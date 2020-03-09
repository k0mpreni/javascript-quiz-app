import React, { useState } from 'react';
import styles from './question.module.css';
import { Remarkable } from 'remarkable';

const md = new Remarkable();

const Question = ({ question }) => {
  const [answer, setAnswer] = useState();

  return (
  <div className={styles.content}>
    <h1 dangerouslySetInnerHTML={{ __html: md.render(question.title) }} />
    {question.snippet && (
      <pre >
        <code>{question.snippet}</code>
      </pre>
    )}
    <form>
      <fieldset id="choices" className={styles.choices}>
        {question.choices.map((choice, index) => (
          <div className={styles.choice} key={index}>
            <input className={styles.state} type="radio" name="app" id={choice.key} value={choice.key} disabled={choice.key === answer} onChange={e => setAnswer(e.target.value)} />
              <label className={styles.choiceLabel} htmlFor={choice.key}>
                <div className={styles.indicator}></div>
                <span className={styles.text}>{choice.key}: <span className={styles.choiceHTML} dangerouslySetInnerHTML={{ __html: md.render(choice.value) }}></span> </span>
              </label>
          </div>
        ))}
      </fieldset>
    </form>
    {/* {#if userAnswered}
    {#if displayAnswer}
      <p>Correct! Answer is: {question.answer}</p>
      <p>
        {@html question.explanation}
      </p>
    {:else}
      <p>Wrong answer :(</p>
      <p>Correct answer was: {question.answer}</p>
      <p>
        {@html question.explanation}
      </p>
    {/if}
  {/if} */}
  </div>
)}

export default Question;