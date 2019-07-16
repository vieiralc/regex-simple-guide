import React, { useState } from 'react'
import Page from './components/Page'
import ins from './data/instructions.json'

function App() {

  const [texts] = useState(ins)

  const getRandomNumber = () => {
    let random = Math.floor(Math.random() * 5) + 1
    return random
  }

  return (
    <div className="main">
      <header className="header">
        <h1> Regex - the simple guide </h1>
        <p> a simple guide for getting started with Regex </p>
      </header>

      <section className="body">
        {
          texts.map((text, index) => 
            <Page key={index} title={text.title} text={text.text} classname={`class${getRandomNumber()}`}/>
          )
        }
      </section>
    </div>
  );
}

export default App;
