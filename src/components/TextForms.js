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

    const [text, setText] = useState('');
    // text ="new text";  //wrong way to change the state
    // setText ("new text");  //correct way to change the state
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className=" btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className=" btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} charecters</p>
            <p>{0.008* text.split(" ").length} Reading time</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    );
}
