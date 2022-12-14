import React from 'react';
import "./App.css"

interface Props {
  name: string;
  url: string;
};


const App: React.FC<Props> = ({ name, url }) => {
  return (
    <div className="App">
    <h1>Hello, {name}!</h1>
    <img src={url} alt='chat-gpt' />
  </div>
  )
};

export default App;
