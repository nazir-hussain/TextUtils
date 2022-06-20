import React, {useState} from 'react'


export default function TextForms(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked:", + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked:", + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleOnChange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text ="new text";  //wrong way to change the state
    // setText ("new text");  //correct way to change the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className=" btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className=" btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
    );
}
