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
     
     <div>
     <Layout title = "BOS → NY Directions">

      <p className = "navLinkItem">Check out Toll Route Directions <a className = "navLinkText" target = "_blank" href="https://farooqashar.github.io/BOSNYTOLL.pdf">HERE</a>.</p>

      <p className = "navLinkItem">Check out No-Toll Route Directions <a className = "navLinkText" target = "_blank" href="https://farooqashar.github.io/BOSNYNOTOLL.pdf">HERE</a>.</p>

     </Layout>
     </div>
  )
}