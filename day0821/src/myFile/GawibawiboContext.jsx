import React, { createContext, useState } from 'react';

// Context 생성
const GawibawiboContext = createContext();

export const GawibawiboProvider = ({ children }) => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playGame = (choice) => {
    const choices = ['가위', '바위', '보'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerSelection);

    if (choice === computerSelection) {
      setResult('비김');
    } else if (
      (choice === '가위' && computerSelection === '보') ||
      (choice === '바위' && computerSelection === '가위') ||
      (choice === '보' && computerSelection === '바위')
    ) {
      setResult('승');
    } else {
      setResult('패');
    }
  };

  return (
    <GawibawiboContext.Provider value={{ userChoice, computerChoice, result, playGame }}>
      {children}
    </GawibawiboContext.Provider>
  );
};

export default GawibawiboContext;