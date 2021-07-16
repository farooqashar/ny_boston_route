import * as React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle } from '../components/layout.module.css'

export default function Component () {
  return (
     
     
     <Layout title = "NY → BOS Directions">

      <p className = "navLinkItem">Check out Toll Route Directions <a className = "navLinkText"  target = "_blank" href="https://farooqashar.github.io/NYBOSTOLL.pdf">HERE</a>.</p>

      <p className = "navLinkItem">Check out No-Toll Route Directions <a className = "navLinkText" target = "_blank" href="https://farooqashar.github.io/NYBOSNOTOLL.pdf">HERE</a>.</p>

     </Layout>
  )
}