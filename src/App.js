import React, { useState } from 'react'

function App() {

  const [input, setInput] = useState("")

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
        <div id="splitpage" className={`page class1`}>
          <div className="left">
              <h3>teste1</h3>
              <p>texte1</p>
          </div>
          <div className="right">
            <h5>Example: [0-9]{1}\.[0-9]{2} </h5>
            <form onSubmit={handleSubmit}>
              
              <input 
                type="text"
                id="myInput"
                className="form-control mb-2"
                placeholder="Some text..." 
                pattern="[0-9]{1}\.[0-9]{2}"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <button id="myButton" type="submit">Test!</button>
            </form>
          </div>
        </div>

        <div id="simplepage" className={`page class2`}>
            <h3>teste2</h3>
            <p>teste2</p>
        </div>

        <div id="simplepage" className={`page class3`}>
            <h3>teste2</h3>
            <p>teste2</p>
        </div>

        <div id="simplepage" className={`page class4`}>
            <h3>teste2</h3>
            <p>teste2</p>
        </div>

        <div id="simplepage" className={`page class5`}>
            <h3>teste2</h3>
            <p>teste2</p>
        </div>
      </section>
    </div>
  );
}

export default App;
