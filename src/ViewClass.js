import React from 'react';

function ViewClass({ students }) {
  return (
    <div className="view-class-container">
      <h1>Class List</h1>
      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        <ul className="student-list">
          {students.map((student, index) => (
            <li key={index} className="student-item">
              {student.name} - {student.birthday} - {student.address} - {student.grade} - {student.parent1} ({student.phone1}) - {student.parent2} ({student.phone2})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewClass;
