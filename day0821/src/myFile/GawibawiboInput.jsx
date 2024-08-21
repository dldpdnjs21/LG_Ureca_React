import React, { useContext } from 'react';
import GawibawiboContext from './GawibawiboContext';

const GawibawiboInput = () => {
  const { playGame } = useContext(GawibawiboContext);

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', height:'50px',
     }}>
          <button onClick={() => playGame('가위')}>가위</button>
          <button onClick={() => playGame('바위')}>바위</button>
          <button onClick={() => playGame('보')}>보</button>
    </div>
    <h3> 가위,바위,보 하나만 선택하세요 </h3>
    </>
  );
};

export default GawibawiboInput;