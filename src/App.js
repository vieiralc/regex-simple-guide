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
    setInput("")
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
              <table id="myTable" border="1">
                <th> Character classes </th>
                <th> Description </th>
                <tr>
                  <td> <b>.</b> </td>
                  <td>matches any character except line breaks</td>
                </tr>
                <tr>
                  <td> <b>\w</b> </td>  
                  <td>matches any digit (0-9). Equivalent to [0-9]</td>
                </tr> 
                <tr>
                  <td><b>\d</b></td>
                  <td>matches any digit (0-9). Equivalent to [0-9]</td>
                </tr>
                <tr>
                  <td><b>\s</b></td>
                  <td>matches any whitespace (spaces, line breaks, tabs)</td>
                </tr>
                <tr>
                  <td><b>[ABC]</b></td>
                  <td>matches any character in the set</td>
                </tr>
                <tr>
                  <td><b>[^ABC]</b></td>
                  <td>matches any character that is <b>not</b> in the set</td>
                </tr>
                <tr>
                  <td><b>[A-Z]</b></td>
                  <td>matches any character between the interval</td>
                </tr>
              </table>
          </div>
          <div className="right">
            <h5>Example: [\w0-9] </h5>
            <p> Try to match the pattern: </p>
            <form onSubmit={handleSubmit}>
              
              <input 
                type="text"
                id="myInput"
                className="form-control mb-2"
                placeholder="Some text..." 
                pattern="[\w0-9]"
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
              <table id="myTable" border="1">
                <th> Anchors </th>
                <th> Description </th>
                <tr>
                  <td> <b>^</b> </td>
                  <td>matches beginning of the string or line</td>
                </tr>
                <tr>
                  <td> <b>$</b> </td>  
                  <td>matches end of string or line </td>
                </tr> 
                <tr>
                  <td><b>\b</b></td>
                  <td>matches a word boundary position</td>
                </tr>
                <tr>
                  <td><b>\B</b></td>
                  <td>matches any position that is <b>not</b> a word boundary</td>
                </tr>
              </table>
          </div>
          <div className="right">
            <h5>Example: $ </h5>
            <form onSubmit={handleSubmit}>
              
              <input 
                type="text"
                id="myInput"
                className="form-control mb-2"
                placeholder="Some text..." 
                pattern="$"
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
              <table id="myTable" border="1">
                <th> Escaped Characters </th>
                <th> Description </th>
                <tr>
                  <td> <b>\.</b> </td>
                  <td>match only the dot</td>
                </tr>
                <tr>
                  <td> <b>\?</b> </td>  
                  <td>matches the question mark </td>
                </tr> 
                <tr>
                  <td><b>\+</b></td>
                  <td>plus sign</td>
                </tr>
                <tr>
                  <td><b>\*</b></td>
                  <td>matches the star key </td>
                </tr>
                <tr>
                  <td><b>\^</b></td>
                  <td> matches the circumflex </td>
                </tr>
                <tr>
                  <td><b>\$</b></td>
                  <td> matches the dollar sign </td>
                </tr>
              </table>
          </div>
          <div className="right">
            <h5>Example: [0-9]\.[0-9]\*[a-f] </h5>
            <form onSubmit={handleSubmit}>
              
              <input 
                type="text"
                id="myInput"
                className="form-control mb-2"
                placeholder="Some text..." 
                pattern="[0-9]\.[0-9]\*[a-f]"
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
              <table id="myTable" border="1">
                <th> Groups </th>
                <th> Description </th>
                <tr>
                  <td> <b>(ABC)</b> </td>
                  <td>groups multiple tokens together</td>
                </tr>
                <tr>
                  <td> <b>\1</b> </td>  
                  <td> matches the results of a previous capture group </td>
                </tr> 
              </table> <br/>
              <table id="myTable" border="1">
                <th>Expression</th>
                <th> Matches </th>
                <tr>
                  <td> <b>(ha!)+</b> </td>
                  <td> ha!, ha!ha!, ha!ha!ha! </td>
                </tr>
                <tr>
                  <td> <b>(www\.)?zz\.com</b> </td>
                  <td> www.zz.com, zz.com </td>
                </tr>
                <tr>
                  <td> <b>(in|con)?certo</b> </td>
                  <td> incerto, concerto, certo </td>
                </tr>
                <tr>
                  <td> <b>(mini|(su|hi)per)?mercado</b> </td>
                  <td> supermercado, hipermercado, minimercado </td>
                </tr>
              </table>
          </div>
          <div className="right">
            <h5>Example: (quero)-\1 </h5>
            <form onSubmit={handleSubmit}>
              
              <input 
                type="text"
                id="myInput"
                className="form-control mb-2"
                placeholder="Some text..." 
                pattern="(quero)-\1"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <button id="myButton" type="submit">Test!</button>
            </form>
          </div>
        </div>

        <div id="splitpage" className={`page class1`}>
          <div className="left">
              <h3>Chapter 5: </h3>
              <h3><i>Quantifiers & Alternations</i></h3> 
              <table id="myTable" border="1">
                <th>Quantifiers</th>
                <th> Description </th>
                <tr>
                  <td> <b>+</b> </td>
                  <td> matches 1 or more of the preceding token </td>
                </tr>
                <tr>
                  <td> <b>*</b> </td>
                  <td> matches 0 or more of the preceding token</td>
                </tr>
                <tr>
                  <td> <b>{"{1,3}"}</b> </td>
                  <td> matches the specified quantity of the previous token </td>
                </tr>
                <tr>
                  <td> <b>?</b> </td>
                  <td> Option. Matches 0 or 1 of the preceding token </td>
                </tr>
                <tr>
                  <td> <b>|</b> </td>
                  <td> Boolean. Acts like a boolean OR </td>
                </tr>
              </table>
          </div>
          <div className="right">
            <h5>Example: [\d]{"{3}"}\.[\d]{"{3}"}\.[\d]{"{3}"}-[\d]{"{2}"} </h5>
            <form onSubmit={handleSubmit}>
              
              <input 
                type="text"
                id="myInput"
                className="form-control mb-2"
                placeholder="Some text..." 
                pattern="[\d]{3}\.[\d]{3}\.[\d]{3}-[\d]{2}"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <button id="myButton" type="submit">Test!</button>
            </form>
          </div>
        </div>
      
        <div id="simplepage" className={`page class2`}>
          <h3>Challenge: </h3>
          <p> 
            Try to match the following pattern <br/><br/><br/>
            [a-z0-9_%+-]+@[a-z0-9-]+\.[a-z]{"{2,}"}$ 
          </p>
          <form onSubmit={handleSubmit}>
              
              <input 
                type="text"
                id="myInput"
                className="form-control mb-2"
                placeholder="Some text..." 
                pattern="[a-z0-9_%+-]+@[a-z0-9-]+\.[a-z]{2,}$"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <button id="myButton" type="submit">Test!</button>
            </form>
        </div>

        <div id="simplepage" className={`page class3`}>
          <h3>Example: Matching a password </h3>
          <p className="text"> 
          We begin by telling the parser to find the beginning of the string (^), followed by any lowercase letter (a-z), number (0-9), an underscore, or a hyphen. Next, {"{6,18}"} makes sure that are at least 6 of those characters, but no more than 18. Finally, we want the end of the string ($).<br/><br/><br/></p>
          <p>^[a-z0-9_-]{"{6,18}"}$</p>
          <form onSubmit={handleSubmit}>
              
              <input 
                type="text"
                id="myInput"
                className="form-control mb-2"
                placeholder="Some text..." 
                pattern="^[a-z0-9_-]{6,18}$"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <button id="myButton" type="submit">Test!</button>
            </form>
        </div>
      </section>
    </div>
  );
}

export default App;
