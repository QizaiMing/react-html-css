import React from 'react'
import './App.css'

const App = () => {
  return (
    <React.Fragment>
      <h1 id='title'>My Website</h1>
      <p className='para-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa
        ipsum quisquam quas fugit reprehenderit illum at nobis adipisci eos!
      </p>
      <h2 className='subtitle'>About Me</h2>
      <img src='logo512.png' alt='logo' id='about-us-image' />
      <p className='para-text'>
        <span className='italics'>Lorem ipsum dolor sit amet</span>, consectetur
        adipisicing elit. Mollitia officia iure ratione rerum ab, asperiores
        numquam accusantium hic earum exercitationem aut nostrum minima
        recusandae similique laboriosam optio iste obcaecati veritatis odio
        aliquam porro itaque. Eos ut doloribus iste placeat expedita, fuga quo
        nulla. Accusamus est illo, ea provident sint voluptas.
        <ul>
          <li className='list-item'>Excepteur sint occaaecat</li>
          <ol>
            <li className='list-item'>My numbered list item</li>
          </ol>
        </ul>
      </p>

      <h2 className='subtitle'>Services</h2>

      <a href='https://www.google.com' className='link'>
        Click here to go to Google
      </a>
      <table border='1'>
        <thead>
          <tr>
            <td>Lorem</td>
            <td>Ipsum</td>
            <td>Dolor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sit</td>
            <td>Amet</td>
            <td>consectetur</td>
          </tr>
          <tr>
            <td>Asipisicing</td>
            <td>Elit</td>
            <td>Sed</td>
          </tr>
        </tbody>
      </table>
      <div id='service-image'></div>
      <div className='container'>
        <div
          className='container-item'
          style={{ order: 4, flexGrow: 1, flexShrink: 1, flexBasis: 100 }}>
          A
        </div>
        <div
          className='container-item'
          style={{ order: 3, flexGrow: 1, flexShrink: 3, flexBasis: 100 }}>
          B
        </div>
        <div
          className='container-item'
          style={{ order: 5, flexGrow: 5, flexShrink: 1, flexBasis: 100 }}>
          C
        </div>
        <div
          className='container-item'
          style={{ order: 1, flexGrow: 1, flexShrink: 1, flexBasis: 100 }}>
          D
        </div>
        <div
          className='container-item'
          style={{ order: 2, flexGrow: 1, flexShrink: 1, flexBasis: 100 }}>
          E
        </div>
      </div>
      <h2 className='subtitle'>Contact Us</h2>
      <form>
        <input type='text' placeholder='Full Name' className='form-input' />
        <input type='email' placeholder='Email' className='form-input' />
        <textarea></textarea>
        <button>Submit</button>
      </form>
    </React.Fragment>
  )
}

export default App
