import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import Notes from "../notes.js"

// function createNote(NoteObject) {
//     return (
//         <Note key={NoteObject.key} title={NoteObject.title} bio={NoteObject.bio} />
//     )
// }

function App() {
    return (
        <div className='body'>
                <Header />
                {Notes.map(NoteObject => (
                    <Note 
                        key={NoteObject.key} 
                        title={NoteObject.title} 
                        noteText={NoteObject.content} />))}
                <Footer />
        </div>
    )
}

export default App;