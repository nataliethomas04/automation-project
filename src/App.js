import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import ViewClass from './components/ViewClass';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register addStudent={addStudent} />
          </Route>
          <Route path="/view-class">
            <ViewClass students={students} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
