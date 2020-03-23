import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styles from './index.module.css';

const IndexPage = () => {


  return (
    <Layout>
      <div>
        <h1 className={styles.title}>Welcome on the javascript quiz!</h1>
        <div className={styles.link}>
          <p>Let's practice some questions!</p>
          <Link to="/1">Go to the first question</Link>
        </div>
      </div>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
