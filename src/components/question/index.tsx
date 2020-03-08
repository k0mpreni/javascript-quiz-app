import React from 'react';
import styles from './question.module.css';

const Question = ({ question }) => (
  <div className={styles.content}>
    <h1>{question.title}</h1>
    {question.snippet && (
      <pre>
        <code>{question.snippet}</code>
      </pre>
    )}
    <form>
      <fieldset id="choices" className={styles.choices}>
        {question.choices.data.map((choice, index) => (
          <div className={styles.choice} key={index}>
            <label className={styles.choiceLabel}>
              <span className={styles.choiceKey}>{choice.key}:</span>
              <p>
                {choice.value}
              </p>
            </label>
            <input
              type="radio"
              id={choice.key}
              value={choice.key}
              name="choices" />
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
)

export default Question;