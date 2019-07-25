import React, { useState } from 'react'
import Notifications, { notify } from 'react-notify-toast'
import Messages from './components/Messages'
import meme from './img/meme.png'

function App() {

  const [input, setInput] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    let rand = Math.floor(Math.random() * Messages.length)
    console.log(rand)
    notify.show(Messages[rand], "warning", 2000)
  }

  return (
    <div className="main">
      <Notifications/>
      <header className="header">
        <h1> Regex - the simple guide </h1>
        <p> a simple guide for getting started with Regex </p>
      </header>

      <section className="body">
        <div id="simplepage" className={`page class1`}>
          <h3>Chapter 0: </h3>
          <h3><i>Why Regex?</i></h3> 
          <p className="text">Short for <b>regular expression</b>, it allows you to create patterns to match or locate any text.
            It is very useful in many situation in computer programming. Regex can save you lots of time and effort. </p>
          <img src={meme} alt="regex meme" width="300"/>  
        </div>

        <div id="splitpage" className={`page class2`}>
          <div className="left">
              <h3>Chapter 1: </h3>
              <h3><i>Character classes</i></h3> 
              <p className="text"></p>
          </div>
          <div className="right">
            <h5>Example: [0-9]{"{1}"}\.[0-9]{"{2}"} </h5>
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

        <div id="splitpage" className={`page class3`}>
          <div className="left">
              <h3>Chapter 2: </h3>
              <h3><i>Anchors</i></h3> 
              <p className="text"></p>
          </div>
          <div className="right">
            <h5>Example: [0-9]{"{1}"}\.[0-9]{"{2}"} </h5>
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

        <div id="splitpage" className={`page class4`}>
          <div className="left">
              <h3>Chapter 3: </h3>
              <h3><i>Escaped Characters</i></h3> 
              <p className="text"></p>
          </div>
          <div className="right">
            <h5>Example: [0-9]{"{1}"}\.[0-9]{"{2}"} </h5>
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

        <div id="splitpage" className={`page class5`}>
          <div className="left">
              <h3>Chapter 4: </h3>
              <h3><i>Groups & Lookaround</i></h3> 
              <p className="text"></p>
          </div>
          <div className="right">
            <h5>Example: [0-9]{"{1}"}\.[0-9]{"{2}"} </h5>
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

        <div id="splitpage" className={`page class5`}>
          <div className="left">
              <h3>Chapter 5: </h3>
              <h3><i>Quantifiers & Alternations</i></h3> 
              <p className="text"></p>
          </div>
          <div className="right">
            <h5>Example: [0-9]{"{1}"}\.[0-9]{"{2}"} </h5>
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
      </section>
    </div>
  );
}

export default App;
