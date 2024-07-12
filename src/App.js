import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    address: '',
    grade: '',
    parent1: '',
    parent2: '',
    phone1: '',
    phone2: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = formData;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      setStudents([...students, formData]);
    }
    setFormData({
      name: '',
      birthday: '',
      address: '',
      grade: '',
      parent1: '',
      parent2: '',
      phone1: '',
      phone2: ''
    });
    setPage('home');
  };

  const handleEdit = (index) => {
    setFormData(students[index]);
    setEditIndex(index);
    setPage('register');
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div>
      {page === 'home' && (
        <div>
          <h1>School Registration</h1>
          <button onClick={() => setPage('register')}>Register New Student</button>
          <button onClick={() => setPage('viewClass')}>View Class</button>
        </div>
      )}

      {page === 'register' && (
        <div>
          <h1>{editIndex !== null ? 'Edit Student' : 'Register New Student'}</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Birthday:</label>
              <input type="date" name="birthday" value={formData.birthday} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Grade:</label>
              <input type="text" name="grade" value={formData.grade} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Parent 1 Name:</label>
              <input type="text" name="parent1" value={formData.parent1} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Parent 2 Name:</label>
              <input type="text" name="parent2" value={formData.parent2} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Parent 1 Phone:</label>
              <input type="tel" name="phone1" value={formData.phone1} onChange={handleInputChange} required />
            </div>
            <div>
              <label>Parent 2 Phone:</label>
              <input type="tel" name="phone2" value={formData.phone2} onChange={handleInputChange} required />
            </div>
            <button type="submit">{editIndex !== null ? 'Update Student' : 'Add Student'}</button>
            <button type="button" onClick={() => { setPage('home'); setEditIndex(null); }}>Cancel</button>
          </form>
        </div>
      )}

      {page === 'viewClass' && (
        <div>
          <h1>Class List</h1>
          {students.length === 0 ? (
            <p>No students registered yet.</p>
          ) : (
            <ul>
              {students.map((student, index) => (
                <li key={index}>
                  {student.name} - {student.birthday} - {student.address} - {student.grade} - {student.parent1} ({student.phone1}) - {student.parent2} ({student.phone2})
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => setPage('home')}>Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default App;
