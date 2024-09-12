import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';
import Note from './Components/Note';

function App() {

  const [note, setNote] = useState([]);

  function handleAdd(noteTitle, noteContent) {
    let newNote = [...note, { title: noteTitle, content: noteContent }];
    setNote(newNote);
  }

  function handleDelete(item) {
    const deleteNote = note.filter(contentItem => contentItem.content !== item);
    setNote(deleteNote);
  }

  return <>
    <Header />
    <Form onAdd={handleAdd} />
    {note.map((noteItem) => (
      <Note key={noteItem.content} title={noteItem.title} content={noteItem.content} onDelete={handleDelete} />
    ))}
    <Footer />
  </>
}

export default App;