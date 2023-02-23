import './App.css';
import Navbar from './components/NavBar';
import TextForm from './components/TextForm';
import propTypes from 'prop-types';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import React from "react";


function App() {
  const [mode,setMode]=useState('light');
  //tells weather dark mode is enable or not

  const [alert, setAlert] = useState(null);

  //alerts are of different types primary, sucess, warning, dismiss, etc.
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500);
    }

  const toggleMode = ()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode has been enabled",'success');
        document.title='TextUtils - Dark Mode';
        setInterval(()=>{
          document.title='TextUtils is Amazing mode';
        }, 2000);
        setInterval(()=>{
          document.title='Install TextUtils Now';
        }, 1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled",'warning');
        document.title='TextUtils - Light Mode';

      }
  }

  return (
      <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
          <TextForm showAlert={showAlert} text="Enter text to analyze" mode={mode}/>
      </div>
      </>
  );
}

export default App;

Navbar.propTypes = {
  aboutText : propTypes.string.isRequired
}

Navbar.defaultProps = {
  aboutText : 'About TextUtils'
};

/*
https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-domfd

In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

import { Switch, Route } from "react-router-dom";
to
import { Routes ,Route } from 'react-router-dom';

You also need to update the Route declaration from

<Route path="/" component={Home} />
to
<Route path='/' element={<Home/>} />
*/