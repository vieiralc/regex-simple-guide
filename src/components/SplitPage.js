import React, { useState } from 'react'

const SplitPage = ({title, text, classname, regex}) => {

    const [input, setInput] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        console.log(input)
    }

    return (
        <div id="splitpage" className={`page ${classname}`}>
            
            <div className="left">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

            <div className="right">
                <h4>Example: {regex} </h4>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Some text..." 
                        pattern={regex}
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <button> Test</button>
                </form>
            </div>
        </div>
    )
}

export default SplitPage