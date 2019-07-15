import React from 'react';
import Page from './components/Page'

function App() {
  return (
    <div className="main">
      <div className="header">
        <h1> Regex - the simple guide </h1>
        <p> a simple guide for getting started with Regex </p>
      </div>
      <Page title='teste1' text='meu texto 1' classname='class1'></Page>
      <Page title='teste2' text='meu texto 2' classname='class4'></Page>
    </div>
  );
}

export default App;
