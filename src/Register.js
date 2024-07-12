import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register({ addStudent }) {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [grade, setGrade] = useState('');
  const [parent1, setParent1] = useState('');
  const [parent2, setParent2] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, birthday, address, grade, parent1, parent2, phone1, phone2 };
    addStudent(newStudent);
    history.push('/');
  };

  return (
    <div>
      <h1>Register New Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Birthday:</label>
          <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Grade:</label>
          <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required />
        </div>
        <div>
          <label>Parent 1 Name:</label>
          <input type="text" value={parent1} onChange={(e) => setParent1(e.target.value)} required />
        </div>
        <div>
          <label>Parent 2 Name:</label>
          <input type="text" value={parent2} onChange={(e) => setParent2(e.target.value)} required />
        </div>
        <div>
          <label>Parent 1 Phone:</label>
          <input type="tel" value={phone1} onChange={(e) => setPhone1(e.target.value)} required />
        </div>
        <div>
          <label>Parent 2 Phone:</label>
          <input type="tel" value={phone2} onChange={(e) => setPhone2(e.target.value)} required />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default Register;
