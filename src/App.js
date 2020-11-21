import React from 'react'
import './App.css'

const App = () => {
  return (
    <React.Fragment>
      <h2>hello world</h2>
      <h3 className='about-me'>about me</h3>
      <h3 id='services'>services</h3>
      <ul>
        <li>first</li>
        <li>second</li>
        <li>third</li>

        <ol>
          <li>my numbered list item</li>
        </ol>
      </ul>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>

      <a href='https://www.google.com' id='google-link'>
        Click here to got to google
      </a>
    </React.Fragment>
  )
}

export default App
