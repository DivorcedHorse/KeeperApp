import React from 'react';

function Note(props) {
    const {title, noteText} = props

    return (
        <div className='note'>
            <h1>
                {title}
            </h1>
            <p>
                {noteText}
            </p>
        </div>
    )
}

export default Note