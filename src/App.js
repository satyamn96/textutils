// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import { useState } from 'react';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('dark mode has been enabled !!', 'success');
      document.title = 'TextUtils - Dark Mode';
      setInterval(()=>{
        document.title = 'TextUtils is Amazing !!';
      },2000);
      setInterval(()=>{
        document.title = 'Get & Install now !!';
      },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('light mode has been enabled !!', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
