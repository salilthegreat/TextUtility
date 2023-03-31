import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
    }
    const handleClClick = () => {
        setText("")
    }
    const handleReverseLetters = () => {
        let rev = text.split("").reverse().join("");
        setText(rev)
    }
    const handleReverseWords = () => {
        let rev = text.split(" ").reverse().join(" ");
        setText(rev)
    }
    const handleCopyWords = () => {
        navigator.clipboard.writeText(text)
    }
    const handleRemoveExSpace = () => {
        setText(text.split(/[ ]+/).join(" "));
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div className="container">
            <div className="row justify-content-center ">
                <div className='col-md-10 '>
                    <h1 className='text-center'>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className={`form-control text-bg-${props.mode}`} id="myBox" rows="11" onChange={handleOnChange} value={text}></textarea>
                    </div>
                    <button className={`btn  btn-sm me-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleUpClick}>Uppercase</button>
                    <button className={`btn  btn-sm me-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleLoClick}>Lowercase</button>
                    <button className={`btn  btn-sm me-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleClClick}>Clear</button>
                    <button className={`btn  btn-sm me-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleReverseLetters}>Reverse Letters</button>
                    <button className={`btn  btn-sm me-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleReverseWords}>Reverse Words</button>
                    <button className={`btn  btn-sm me-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleCopyWords}>Copy Words</button>
                    <button className={`btn  btn-sm me-3 btn-${props.mode==='light'?'warning':'dark'}`} onClick={handleRemoveExSpace}>Remove Extra Space</button>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Your text summary</h2>
                    <p>{text===""?0:text.split(" ").length} words and {text.length} characters</p> 
                    <p>{text===""?0:0.008 * text.split(" ").length} Minutes read</p> 
                    <h3>Preview</h3>
                    <p>{text.length>0 ? text:"Enter something above to preview it here"}</p>            
                </div>
            </div>
        </div>
        </>
    )
}
