import React, { useState, useEffect } from 'react';
import PersonCreate from './PersonCreate';
import PersonList from './PersonList';

const PersonMain = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const storedPeople = JSON.parse(localStorage.getItem('people')) || [];
    setPeople(storedPeople);
  }, []);

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  const deletePerson = (id) => {
    setPeople(people.filter(person => person.id !== id));
  };

  const updatePerson = (updatedPerson) => {
    setPeople(
      people.map(person => (person.id === updatedPerson.id ? updatedPerson : person))
    );
  };

  return (
    <div>
      <h1>사람정보입력</h1>
      <hr/>
      <PersonCreate addPerson={addPerson} people={people} />
      <PersonList people={people} deletePerson={deletePerson} updatePerson={updatePerson} />
    </div>
  );
};

export default PersonMain;