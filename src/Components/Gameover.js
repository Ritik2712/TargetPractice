import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Reset } from '../Reducer/Action-Creator';
import Score from './Score';

export default function Gameover({ toggel }) {
    const players = useSelector(state => state.players)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Reset())
    }, [])
    return (
        <div>
            <h1>Game Over</h1>
            <Score scores={players} />
            <button onClick={() => { toggel() }}>Click</button>
        </div>);
}
