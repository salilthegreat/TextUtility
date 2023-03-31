import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      document.body.style.color = 'white'
    }else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color = 'black'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode = {toggleMode}/>
      <TextForm heading ="Enter The Text To Analyze" mode={mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;

