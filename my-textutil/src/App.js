import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us"/>
      {/* <TextForm heading ="Enter The Text To Analyze"/> */}
      <About/>
    </>
  );
}

export default App;

