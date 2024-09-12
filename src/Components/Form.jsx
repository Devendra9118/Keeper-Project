import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from "@material-ui/core/Zoom";


function Form({ onAdd }) {

  const [isExpand, setExpand] = useState(false);
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState("");

  function handleExpand() {
    setExpand(true)
  }

  function handleInput(event) {
    const newInputText = event.target.value;
    setInputText(newInputText)
  }

  function handleText(event) {
    const newText = event.target.value;
    setText(newText);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(inputText, text);
    setInputText("");
    setText("");
  }

  return <form >
    <div onClick={handleExpand}>
      {isExpand && <input onChange={handleInput} type="text" placeholder="Title" value={inputText} />}
      <textarea value={text} onChange={handleText} name="Take a note" rows={isExpand ? "3" : "1"} placeholder="Take a note..."></textarea>
    </div>
    <Zoom in={isExpand}>
      <button onClick={handleSubmit} type="submit"><AddIcon /></button>
    </Zoom>
  </form>
}


export default Form;