import React from 'react'
import Navbar from './Navbar'
import './About.css'

export default function About() {
  return (
    <div className='About'>
      <Navbar />

      <div style={{ marginTop: 'calc(5vh + 50px)' }}></div>

      <div className='About-Explanation'>
        <p>
          <b>COUNTRY COMPARE-er</b> is a free, one-stop destination for
          comparing economic, demographic, social, and military statistics of
          different countries. Simply select two countries, click the search
          button, and view accurate and up-to-date statistics from reliable
          sources, such as the World Bank, International Monetary Fund, United
          Nations, and more. <br /> <br />
          All data is gathered through the Nasdaq World Bank API and flags from
          FlagsPedia.net, and are the most recent statistics available. These
          statistics are <b>citable</b>, making them useful for students and
          researchers. <br /> <br />
          COUNTRY COMPARE-er is part of the <b>HOPE</b> open-source project,
          founded by{' '}
          <a target='_blank' href='https://pasha-khoshkebari.com/'>
            Mohammad Pasha Khoshkebari
          </a>
          , which aims to provide free tools for students, educators, and
          life-long learners to make problem-solving easier. For more
          information or to contribute to the project, visit the{' '}
          <b>HOPE Github page</b> at{' '}
          <a target='_blank' href='https://github.com/HOPE028/HOPE'>
            <b>
              https://github.com<span style={{ fontSize: '1px' }}> </span>
              /HOPE028/HOPE
            </b>
          </a>{' '}
          .
        </p>
      </div>
    </div>
  )
}
