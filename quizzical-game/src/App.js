import './App.css';
import ScreenStart from './components/ScreenStart';
import ScreenQuizz from './components/ScreenQuizz';
import { useState } from 'react';
function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const handleGameStart = () => {
    setGameStarted(!gameStarted);
  }
  const screenDisplay = gameStarted ?
    <ScreenQuizz handleGameStart={handleGameStart}></ScreenQuizz>
    :
    <ScreenStart handleGameStart={handleGameStart}></ScreenStart>
  return (
    <div>
      {
        screenDisplay
      }
    </div>
  );
}

export default App;
