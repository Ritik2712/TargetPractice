import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Game from './Components/Game';
import Gameover from './Components/Gameover';
import { addPlayer } from './Reducer/Action-Creator';



function App() {
  const [gameover, updateGameover] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addPlayer())
  }, [])
  return (
    <div className="App">
      {gameover ? null : <Game toggel={() => updateGameover(true)} />}
      {gameover ? <Gameover toggel={() => updateGameover(false)} /> : null}

    </div>
  );
}

export default App;
