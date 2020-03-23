import React from "react"

import SEO from "../components/seo"
import { Link } from "gatsby"

import styles from './infos.module.css';


const InfosPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <p>This is a work in progress application. If you see some errors, please open an issue on the <a href="https://github.com/brainlulz/javascript-quiz-app" target="_blank" rel="noreferrer noopener">Github repository</a></p>
        <p>Questions aren't mine, if you want so a big thanks to Lydia Hallie 🔥 You can find them here: <a href="https://github.com/lydiahallie/javascript-questions" target="_blank" rel="noreferrer noopener">Github</a></p>
      <Link to="/">Home</Link>
      </div>
      <SEO title="Infos" />
    </>
  )
}

export default InfosPage
