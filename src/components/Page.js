import React from 'react'

const page = ({title, text, classname}) => {

    return (
        <div className={`page ${classname}`}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default page