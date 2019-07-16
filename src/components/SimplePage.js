import React from 'react'

const SimplePage = ({title, text, classname}) => {

    return (
        <div id="simplepage" className={`page ${classname}`}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default SimplePage