import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      removeCls();
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "success");
      // document.title = "Textutil-Dark Mode";
      // setInterval(() => {
      //   document.title = "Textutil is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Textutil is Cool"
      // }, 1155);
    } else {
      removeCls();
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
      // document.title = "Textutil-Light Mode"
    }
  }
  const removeCls = ()=>{
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
  }
  const changeBG = (cls)=>{
    removeCls();
  document.body.classList.add(`bg-${cls}`)
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter The Text To Analyze" mode={mode} showAlert={showAlert} /> */}
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} changeBG={changeBG} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter The Text To Analyze" mode={mode} showAlert={showAlert} />} />
          <Route exact path='/about' element={<About mode={mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

