import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useModal } from './hook/useModal';

function App() {
  const { Modal, show } = useModal();
  return (
    <div className="App">
      {Modal ? <Modal /> : null}

      <button onClick={() => show('Conteúdo do modal')}>Open Modal</button>
    </div>
  );
}

export default App;
