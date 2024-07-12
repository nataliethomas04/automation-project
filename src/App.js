import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>School Registration</h1>
        </header>
        <main>
          <Switch>
            <Route path="/register">
              <Register addStudent={addStudent} />
            </Route>
            <Route path="/view-class">
              <ViewClass students={students} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer className="App-footer">
          <p>&copy; 2024 School Registration</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
