import React, { useState, useEffect } from 'react';

import { Link } from 'gatsby'
import Layout from '../components/layout'
import {
  navLinkText
   } from '../components/layout.module.css'

const IndexPage = () => {



  return (
    <div>
    <Layout title="Home Page">
      <h3>Hi! This site will provide a general overview of the driving route between New York City, New York and Boston, Massachusetts.</h3> 
      <Link className={navLinkText} to="/map">View Map Of NY-Boston Route</Link>
  
    </Layout>
    </div>
  )
}

export default IndexPage
