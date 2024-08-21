import React, { useContext } from 'react';
import GawibawiboContext from './GawibawiboContext';

const GawibawiboResult = () => {
  const { userChoice, computerChoice, result } = useContext(GawibawiboContext);

  return (
    <div>
        <hr/>
        <h3>당신의 선택: {userChoice}</h3>
        <h3>컴퓨터의 선택: {computerChoice}</h3>
        <h3>결과: 사람 {result}</h3>
    </div>
  );
};

export default GawibawiboResult;