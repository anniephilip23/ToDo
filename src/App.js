import React from 'react';
import './App.css';
import CreatDay from './component/CreateDay';

function App() {
  return (
    <div className="container-fluid">
     <div>
       <h1 style={{textAlign:"center", margin:"2%"}}>Daily Planner</h1>
     </div>
     <div><CreatDay /></div>
    </div>
  );
}

export default App;
