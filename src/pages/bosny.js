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
     
     
     <Layout title = "BOS → NY">
     <h3>Boston, MA to New York, NY Route Overview</h3>
     <p><b>Distance: </b> 250 Miles </p>
     <p><b>Number of States: </b> 4</p>
     <p><b>Normal Duration:</b> 4 Hours</p>

      <Link className={navLinkText} to="/bosnydir">View Boston → NY Directions</Link>

     </Layout>
  )
}