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
            <Route exact path="/" component={Home} />
            <Route path="/register">
              <Register addStudent={addStudent} />
            </Route>
            <Route path="/view-class">
              <ViewClass students={students} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
