import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-md-6'>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" rows="11" onChange={handleOnChange} value={text}></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
                </div>
            </div>
        </div>
    )
}
