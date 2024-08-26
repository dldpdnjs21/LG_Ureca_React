import React, { useState } from 'react';
import './PersonCreate.css';

const PersonCreate = ({ addPerson, people }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !age || !job) return;

    const newPerson = {
      id: people.length + 1, // 현재 people 배열의 길이를 기준으로 ID 부여
      name,
      age,
      job
    };

    addPerson(newPerson);
    setName('');
    setAge('');
    setJob('');
  };

  return (
    <form onSubmit={handleSubmit}>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li>
                <span>이름: </span>
            <input 
                type="text"
                value={name} 
                onChange={(event) => setName(event.target.value)} 
            />
            </li>
            <li>
            <span>나이: </span>
            <input 
                type="number"
                value={age} 
                onChange={(event) => setAge(event.target.value)} 
            />
            </li>
            <li>
            <span>직업: </span>
            <input 
                type="text"
                value={job} 
                onChange={(event) => setJob(event.target.value)} 
            />
            </li>
        </ul>
      <button type="submit">입력</button>
    </form>
  );
};

export default PersonCreate;