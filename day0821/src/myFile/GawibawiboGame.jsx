import React from 'react';
import GawibawiboHeader from './GawibawiboHeader';
import GawibawiboInput from './GawibawiboInput';
import GawibawiboResult from './GawibawiboResult';
import { GawibawiboProvider } from './GawibawiboContext';

const styles = {
    container: {
        textAlign: 'center',
    },
  };

const GawibawiboGame = () => {
  return (
    <GawibawiboProvider>
      <div style={styles.container}>
        <GawibawiboHeader />
        <GawibawiboInput />
        <GawibawiboResult />
      </div>
    </GawibawiboProvider>
  );
};

export default GawibawiboGame;