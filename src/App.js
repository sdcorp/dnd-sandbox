import React from 'react';
import Builder from './Builder';
import MainArea from './MainArea';

function App() {
  return (
    <div>
      Records
      <br />
      <main>
        <Builder />
        <MainArea />
      </main>
    </div>
  );
}

export default App;
