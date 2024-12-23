import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';
import Page5 from './Page5.js';

function App() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [emailValue, setEmailValue] = useState('');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page1 inputValue1={inputValue1} setInputValue1={setInputValue1} />} />
          <Route path="/page_2" element={<Page2 inputValue2={inputValue2} setInputValue2={setInputValue2} />} />
          <Route path="/page_3" element={<Page3 inputValue3={inputValue3} setInputValue3={setInputValue3} />} />
          <Route path="/page_4" element={<Page4 inputValue1={inputValue1} inputValue2={inputValue2} inputValue3={inputValue3} emailValue={emailValue} setEmailValue={setEmailValue} />} />
          <Route path="/page_5" element={<Page5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
