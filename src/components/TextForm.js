import React, {useState} from 'react'
// usestate hook

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    console.log("Lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
  const handleClearClick = ()=>{
    console.log("Clear Text was clicked");
    let newText="";
    setText(newText);
  }
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
}

const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}

  const [text,setText] = useState('');
  // text="new text"; //Wrong way to change the state
  // setText("new text"); //Correct way to change the state
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
