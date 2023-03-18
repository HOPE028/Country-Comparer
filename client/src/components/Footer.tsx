import React from 'react'
import './Footer.css'

interface FooterProps {
  year: number
}

const Footer: React.FC<FooterProps> = ({ year }) => {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <nav className='level'>
          <div className='level-item'></div>
          <div className='level-item'>
            <a
              className='link'
              href='https://github.com/HOPE028/Country-Comparer'
            >
              GitHub
            </a>
          </div>
          <div className='level-item'>
            <a className='link' href='https://github.com/HOPE028/HOPE'>
              HOPE
            </a>
          </div>
        </nav>
        <p>&copy; {year} Mohammad Pasha Khoshkebari</p>
      </div>
    </footer>
  )
}

export default Footer
