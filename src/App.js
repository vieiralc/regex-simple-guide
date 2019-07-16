import React, { useState } from 'react'

function App() {

  const [input, setInput] = useState("")

  const getRandomNumber = () => {
    let random = Math.floor(Math.random() * 5) + 1
    return random
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="main">
      <header className="header">
        <h1> Regex - the simple guide </h1>
        <p> a simple guide for getting started with Regex </p>
      </header>

      <section className="body">
        <div id="splitpage" className={`page class${getRandomNumber()}`}>
          <div className="left">
              <h2>teste1</h2>
              <p>texte1</p>
          </div>
          <div className="right">
              <h4>Example: /[0-9]{1}\.[0-9]{2}/ </h4>
              <form onSubmit={handleSubmit}>
                  <input 
                      type="text" 
                      placeholder="Some text..." 
                      pattern="/[0-9]{1}\.[0-9]{2}/"
                      onChange={(e) => setInput(e.target.value)}
                      value={input}
                  />
                  <button> Test</button>
              </form>
          </div>
        </div>

        <div id="simplepage" className={`page class${getRandomNumber()}`}>
            <h2>teste2</h2>
            <p>teste2</p>
        </div>
      </section>
    </div>
  );
}

export default App;
