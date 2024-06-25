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
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default App;
