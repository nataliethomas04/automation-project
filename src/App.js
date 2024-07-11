import React, { useState } from 'react';
import Home from './Home';
import Register from './Register';
import ViewClass from './ViewClass';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>School Registration</h1>
      </header>
      <main>
        <Home />
        <Register addStudent={addStudent} />
        <ViewClass students={students} />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 School Registration</p>
      </footer>
    </div>
  );
}

export default App;
