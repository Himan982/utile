import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState("");

  const showAlert = (massage, type) =>{
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }

  const toggleMode = ()=> {
    if (mode === 'light'){
      setMode ('dark');
      document.body.style.background = '#383c3f'
      showAlert('Dark mode has been enabled', "success")
      document.title = "TextUtiles - Dark mode";
    //   setInterval(() => {
    //     document.title = " TextUtile is Amazing"
    //   }, 2000);
    //   setInterval(() => {
    //     document.title = " Install TextUtile now"
    //   }, 1500);
    }
    else{
      setMode  ('light');
      document.body.style.background = 'white'
      showAlert('Light mode has been enabled', "success")
      document.title = "TextUtiles - Light mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my 3'>
        <TextFrom heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> 
          </Route>
      </Switch>
      </div>
    </Router>
    
    </>
  );
}

export default App;
