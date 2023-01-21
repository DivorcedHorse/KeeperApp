import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
// import Notes from "../notes.js"
import CreateArea from "./CreateArea";


// function createNote(NoteObject) {
//     return (
//         <Note key={NoteObject.key} title={NoteObject.title} bio={NoteObject.bio} />
//     )
// }

function App() {

    const [notes, setNotes] = React.useState([])

    function addNewNote(newNoteObj) {
        
        setNotes([...notes, newNoteObj])
        console.log(notes)
    }

    function deleteNote(id) {
        setNotes([...notes.filter((note, index) => {
            return index !== id
        })])
    }

    return (
        <div className='body'>
                <Header />
                <CreateArea onAdd={addNewNote}/>
                {notes.map((note, index) => (
                    <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
                    ))}
                <Footer />
        </div>
    )
}

export default App;