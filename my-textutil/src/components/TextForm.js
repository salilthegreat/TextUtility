import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClClick = () => {
        setText("")
        props.showAlert("Text Cleared","success")
    }
    const handleReverseLetters = () => {
        let rev = text.split("").reverse().join("");
        setText(rev)
        props.showAlert("Text Reversed","success")
    }
    const handleReverseWords = () => {
        let rev = text.split(" ").reverse().join(" ");
        setText(rev)
        props.showAlert("Words Reversed","success")
    }
    const handleCopyWords = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied","success");
        // document.getSelection().removeAllRanges();
    }
    const handleRemoveExSpace = () => {
        setText(text.split(/\s+/).join(" "));
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div className="container">
            <div className="row justify-content-center ">
                <div className='col-md-10 '>
                    {/* Heading can also used to improove seo */}
                    <h1 className='text-center'>{props.heading}</h1> 
                    <div className="mb-3">
                        <textarea className={`form-control text-bg-${props.mode}`} id="myBox" rows="11" onChange={handleOnChange} value={text}></textarea>
                    </div>
                    <button disabled={text.length===0} className={`btn  btn-sm me-2 mb-2 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleUpClick}>Uppercase</button>
                    <button disabled={text.length===0} className={`btn  btn-sm me-2 mb-2 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleLoClick}>Lowercase</button>
                    <button disabled={text.length===0} className={`btn  btn-sm me-2 mb-2 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleClClick}>Clear</button>
                    <button disabled={text.length===0} className={`btn  btn-sm me-2 mb-2 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleReverseLetters}>Reverse Letters</button>
                    <button disabled={text.length===0} className={`btn  btn-sm me-2 mb-2 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleReverseWords}>Reverse Words</button>
                    <button disabled={text.length===0} className={`btn  btn-sm me-2 mb-2 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleCopyWords}>Copy Words</button>
                    <button disabled={text.length===0} className={`btn  btn-sm me-2 mb-2 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleRemoveExSpace}>Remove Extra Space</button>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Your text summary</h2>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p> 
                    <h3>Preview</h3>
                    <p>{text.length>0 ? text:"Nothing to preview"}</p>            
                </div>
            </div>
        </div>
        </>
    )
}
