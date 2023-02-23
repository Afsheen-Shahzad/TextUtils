import React, { useState } from 'react'

export default function TextForm(props) {


    const handleUpClick = () => {
       // console.log("Upper case was" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case",'success');
    }
    const handleLowClick = () => {
       // console.log("Upper case was" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case",'success');
    }
    const handleClearClick = () => {
        // console.log("Upper case was" + text);
         let newText = '';
         setText(newText);
         props.showAlert("text area is cleared",'success');
     }

     const handleCopy = () => {
        // console.log("Upper case was" + text);
        let copyText=document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to clipboard",'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        //let newText = text.split('\n');   it ll remove the new line & display text in single line
        setText(newText.join(' '));
        props.showAlert("Extra spaces have been removed",'success');
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // setText("Enter texxt");
    return (
        <>
            <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
                <div>
                    <h1>{props.text}</h1>
                    <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white' }} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <buttom className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</buttom>
                <buttom className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lowercase</buttom>
                <buttom className="btn btn-primary m-2" onClick={handleClearClick}>Clear</buttom>
                <buttom className="btn btn-primary m-2" onClick={handleCopy}>Copy to clipboard</buttom>
                <buttom className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</buttom>

            </div>
            <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
                <h1>Your text Summary</h1>
                <p> {text.trim() === '' ? 0 : text.trim().split(' ').length} words and {text.length} characters  </p>
                <h2>Preview</h2>
                <p>{text===''?'Enter the Text to preview it':text}</p>
                {/* it means if text is empty display message else display text*/}
                <p>{text.length>0?text:"enter text to preview"}</p>
                 {/*if text.length greater than 0 then disaply text else display message */}
            </div>
        </>
    )
}
