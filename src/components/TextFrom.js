import React, {useState} from 'react'


export default function TextFrom(props) {
    
    const handleUpClick = () =>{
        console.log("Uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    
    const handleLowClick = () =>{
        console.log("lowercase was click" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    
    function handleClearClick() {
        console.log("Click on clear text");
        setText("");
        props.showAlert("Clear text", "success");
    }
    
    function CopyClick() {
        console.log("Click on copy text" + text);
        props.showAlert("Copy text", "success");
        var text1 = document.getElementById('Textarea');
        text1.select();
        navigator.clipboard.writeText(text1.value);
    }
    
    function handleSpaceClick() {
        console.log("Click on copy text" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Space are removed in  text", "success");
    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <>
        
        <div className='container ' style={{color: props.mode === 'dark' ?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ?'#383c3f':'white', color: props.mode === 'dark' ?'white':'black'}} id="Textarea" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercaes</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to Lowercaes</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={CopyClick}>Copy Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleSpaceClick}>Sapce Text</button>
        </div>
        
        <div className='container my 3' style={{color: props.mode === 'dark' ?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} word and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}
