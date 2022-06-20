import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        setText("you have clicked on handleUpClick")
    }
    const handleOnChange =()=>{
        console.log("on change");
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
            <button className=" btn btn-primary"onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    );
}
