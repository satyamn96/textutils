import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter Text Here");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        // console.log(newText);
        setText(newText);
        props.showAlert("Converted to Uppercase",'success');
    }
    const handleLoClick = () => {
        let newLoText = text.toLowerCase();
        setText(newLoText);
        props.showAlert("Converted to LowerCase",'success');
    }
    const handleClearClick = () => {
        let newLoText = '';
        setText(newLoText);
        props.showAlert("Text Cleared",'danger');
    }
    const handleCopy = () => {
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied to clipboard",'success');
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const handleRemoveSpace = () => {
        let newLoText =  text.split(/[ ]+/);
        setText(newLoText.join(" "));
        props.showAlert("Removed Extra Spaces",'success');
    }

  return (
      <>
    <div className="container" style={{color: props.mode==='light'? '#042743': 'White'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'? 'white': '#042743',color: props.mode==='light'? '#000':'#fff'}} rows="8" className="form-control"></textarea>
      </div>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To Uppercase</button>
          <button className="btn btn-success mx-3 my-3" onClick={handleLoClick}>Convert To Lowercase</button>
          <button className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-danger mx-3 my-3" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-success my-3" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode==='light'? '#042743': '#fff'}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Priview</h2>
        <p>{text.length>0?text:'Enter Something Into Text Box Above To Preveiw It.'}</p>
    </div>
    </>
  )
}
