import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from './index.module.css';

const IndexPage = () => {


  return (
    <Layout>
      <h1 className={styles.title}>Welcome on the javascript quiz!</h1>
      <div className={styles.link}>
        <Link to="/1">Go to the first question</Link>
      </div>
      <SEO title="Home" />
      
    </Layout>
  )
}

export default IndexPage
