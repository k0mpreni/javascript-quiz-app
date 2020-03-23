/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import styles from "./footer.module.css"
import { Link } from "gatsby"

const Footer = () => {

  return (
      <footer className={styles.footer}>
        <Link to="/infos">More informations here</Link>
      </footer>
  )
}

export default Footer
