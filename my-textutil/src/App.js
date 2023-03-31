import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <TextForm heading ="Enter The Text To Analyze" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
    </>
  );
}

export default App;

