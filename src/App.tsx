import React from 'react';
import logo from './logo.svg';
import Upload from './components/Upload';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://firebasestorage.googleapis.com/v0/b/upload-storage-cjh.appspot.com/o/photos%2F2022.10.31-BocaCode-2.jpg?alt=media&token=6ee9916f-fe2b-42df-9706-2182dff37504"} className="App-logo" alt="logo" />
        <p>
          Edit <code>Corwin</code> 
        </p>
        <a
          className="App-link"
          href="https://console.firebase.google.com"
          target="_blank"
          rel="noopener noreferrer"
          > 
          <Upload/>
         
          Corwins projects!
       
        </a>
      </header>
    </div>
  );
}

export default App;
