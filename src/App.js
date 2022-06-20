import React from 'react';
// import Prahlad from './Prahlad.js';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import './App.css';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About-Us" />
      {/* <Navbar/> */}
      <div className="container my-3">
        
    
      <TextForms heading = "Enter the Text to Analyze below:" />
      </div>
    </>
  );
}

export default App;
