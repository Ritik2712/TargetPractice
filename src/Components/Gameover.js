import React from 'react';
import { useSelector } from 'react-redux';
import Score from './Score';

export default function Gameover({ toggel }) {
    const players = useSelector(state => state.players)
    return (
        <div>
            <h1 className='over'>Game Over</h1>
            <Score scores={players} />
            <button onClick={() => { toggel() }}>Click</button>
        </div>);
}
