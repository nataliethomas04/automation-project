function ViewClass({ students }) {
  return (
    <div>
      <h1>Class List</h1>
      {students.length === 0 ? (
        <p>No students registered yet.</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.birthday} - {student.address} - {student.grade} - {student.parent1} ({student.phone1}) - {student.parent2} ({student.phone2})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewClass;