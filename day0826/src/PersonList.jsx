import React, { useState } from 'react';
import './PersonList.css';

const PersonList = ({ people, deletePerson, updatePerson }) => {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');
  const [editJob, setEditJob] = useState('');

  const handleEdit = (person) => {
    setEditId(person.id);
    setEditName(person.name);
    setEditAge(person.age);
    setEditJob(person.job);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!editName || !editAge || !editJob) return;

    updatePerson({
      id: editId,
      name: editName,
      age: editAge,
      job: editJob,
    });

    setEditId(null);
    setEditName('');
    setEditAge('');
    setEditJob('');
  };

  return (
    <div>
        <hr/>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {people.map((person, index) => (
        <li key={person.id} className='profile'>
            <div className="indexNum">
                {index + 1}
            </div>
            <div className='personList'>
                이름: {person.name}, 나이: {person.age}, 직업: {person.job}
                <button onClick={() => deletePerson(person.id)}>삭제</button>
                <button onClick={() => handleEdit(person)}>수정</button>
            </div>
        </li>
        ))}
      </ul>
      <hr/>
      {editId && (
        <form onSubmit={handleUpdate}>
            <ul>
                <li>
                <input
                type="text"
                value={editName}
                onChange={(event) => setEditName(event.target.value)}
                />
                </li>
                <li>
                <input
                type="number"
                value={editAge}
                onChange={(event) => setEditAge(event.target.value)}
                />
                </li>
                <li>
                <input
                type="text"
                value={editJob}
                onChange={(event) => setEditJob(event.target.value)}
                />
                </li>
                <div className='btn'>
                <button type="submit">완료</button>
                </div>
            </ul>
        </form>
      )}
    </div>
  );
};

export default PersonList;