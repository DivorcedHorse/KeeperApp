import React from "react";
import {v4 as uuidv4} from "uuid";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
function CreateArea(props) {

    const [isExpanded, setExpanded] = React.useState(false)
    const [newNote, setNewNote] = React.useState({
        title: "",
        content: "",
    })

    function handleChange(event) {
        const {name, value} = event.target

        // copying previous values into object,
        // [name] : value will update the corresponding NAME element with vale
        // does not add a new property to object but updates it
        setNewNote(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }}
        )
    }

    function expand() {
        setExpanded(true)
    }

  return (
    <div>
      <form className="create-note">
        <div>
            {isExpanded ? <input value={newNote.title} onChange={handleChange} name="title" placeholder="Title" /> : null }
            <textarea onClick={expand} value={newNote.content} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        </div>
        <Fab onClick={(event) => {
            props.onAdd(newNote)
            event.preventDefault()
            setNewNote({ title: "",
            content: "",})
            setExpanded(false)

        }}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
