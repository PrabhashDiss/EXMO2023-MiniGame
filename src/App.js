import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import Tip from './Tip';
import Result from './Result';

const App = () => {
  const [password, setPassword] = useState('AIEscapeChamps');
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const tips = [
    'Think of a group of extraordinary individuals who excel at solving puzzles and escaping tricky situations. This password is a tribute to their skills!',
    'The password contains a combination of uppercase and lowercase letters. Pay attention to the capital letters!',
    'Remember the word "Escape" and focus on the word "Champs". This password celebrates the champions of the AI Escape competition!',
    'The password consists of 13 characters in total. Keep that in mind while making your guesses!',
    'Think about the theme of the competition and consider related keywords or terms that might be included in the password.',
  ];

  const handleGuess = (event) => {
    event.preventDefault();
    if (guess === password) {
      setFeedback('Congratulations! You cracked the password.');
    } else {
      setFeedback('Sorry, that is not the correct password. Please try again.');
    }
  };

  const showNextTip = () => {
    setCurrentTipIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <h1>Password Cracking Game</h1>
      <button type="button" class="btn btn-outline-info" onClick={showNextTip}>Show Next Tip</button>
      {currentTipIndex < tips.length && (
        <Tip tip={tips[currentTipIndex]} />
      )}
      <PasswordInput
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        onSubmit={handleGuess}
      />
      <Result feedback={feedback} />
    </div>
  );
};

export default App;
