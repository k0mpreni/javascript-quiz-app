/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import styles from "./layout.module.css"
import Footer from "../footer/footer"

const Layout = ({ children }) => {

  return (
      <div>
        <main className={styles.mainWrapper}>{children}</main>
        <Footer />
      </div>
  )
}


export default Layout
