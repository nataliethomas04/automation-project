import React, { useState } from 'react';

function App() {
  const [names, setNames] = useState(['', '', '', '']);
  const [selectedName, setSelectedName] = useState('');
  const [selectedDare, setSelectedDare] = useState('');
  const [gameEnded, setGameEnded] = useState(false);

  const dares = [
    'At the end of a meeting, suggest that, for once, it would be nice to conclude with the singing of the national anthem (extra points if you actually launch into it yourself).',
    'Walk into a very busy person’s office and while they watch you with growing irritation, turn the light switch on/off 10 times.',
    'For an hour, refer to everyone you speak to as “Dave”.',
    'Announce to everyone in a meeting that you “really have to go do a number two”.',
    'When you’ve picked up a call, before speaking finish off some fake conversation with the words, ”she can abort it for all I care”.',
    'After every sentence, say "Mon" in a really bad Jamaican accent. As in: “The report’s on your desk, Mon.” Keep this up for one hour.',
    'In a meeting or crowded situation, slap your forehead repeatedly and mutter, “Shut up, damn it, all of you just shut up!”',
    'At lunchtime, get down on your knees and announce, “As God is my witness, I’ll never go hungry again!”',
    'Repeat the following conversation 10 times to the same person: “Do you hear that?” “What?” “Never mind, it’s gone now.”',
    'Present meeting attendees with a cup of coffee and biscuit; smash each biscuit with your fist.'
  ];

  const handleNameChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const pickDare = () => {
    const filteredNames = names.filter(name => name.trim() !== '');
    if (filteredNames.length === 0) {
      alert('Please enter at least one name.');
      return;
    }

    const randomName = filteredNames[Math.floor(Math.random() * filteredNames.length)];
    const randomDare = dares[Math.floor(Math.random() * dares.length)];

    setSelectedName(randomName);
    setSelectedDare(randomDare);
  };

  const resetGame = () => {
    setNames(['', '', '', '']);
    setSelectedName('');
    setSelectedDare('');
    setGameEnded(false);
  };

  const continueGame = () => {
    setSelectedName('');
    setSelectedDare('');
  };

  return (
    <div>
      <h1>Dare Picker</h1>
      {gameEnded ? (
        <div>
          <button onClick={resetGame}>New Game</button>
        </div>
      ) : (
        <div>
          {selectedName && selectedDare ? (
            <div>
              <h2>Selected Dare</h2>
              <p>{selectedName}, your dare is: {selectedDare}</p>
              <button onClick={continueGame}>Continue Game</button>
              <button onClick={() => setGameEnded(true)}>End Game</button>
            </div>
          ) : (
            <div>
              <h2>Enter Names</h2>
              {names.map((name, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleNameChange(index, e.target.value)}
                    placeholder={`Name ${index + 1}`}
                  />
                </div>
              ))}
              <button onClick={pickDare}>Pick a Dare</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

