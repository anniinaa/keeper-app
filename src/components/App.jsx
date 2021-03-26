import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((previousNotes) => {
      return [...previousNotes, newNote];
    });
  }

  function deleteNote(id ){
    setNotes(previousNotes=>{
      return previousNotes.filter((noteItem, index)=>{
        return id !== index;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
{      notes.map((note, index) =>{
        return <Note
          key = {index}
          id={index}
          title = {note.title}
          content ={ note.content}
          onDelete = {deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
