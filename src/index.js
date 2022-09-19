import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <div className='my-text'
    /*style={{
    backgroundColor:"blue",
    padding:'10px',
    color:"yellow", 
    textAlign:'center'
  }}*/>
    <h1>React Native is cool!</h1>
    </div>
  )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
