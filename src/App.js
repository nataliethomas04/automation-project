import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Fortune Cookie</h1>
      <p>Your fortune is...</p>
      <p>{quote}</p>
      <button onClick={fetchQuote}>I need more cookies</button>
    </div>
  );
}

export default App;
