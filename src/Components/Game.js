import React, { useState, useEffect, useRef } from 'react';

export default function Game() {
    const [time, updateTime] = useState(45)
    const [miss, updateMiss] = useState(0)
    const [score, updateScore] = useState(0)
    const [cor, updateCor] = useState({ x: 50, y: 50 })
    var style = { left: `${cor.x}px`, top: `${cor.y}px` }

    var changePos = useRef(null)
    //Coordiantes generator
    function getRandomInt(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    //Change Position
    function changeBtnDirection() {
        let x = getRandomInt(20, 876)
        let y = getRandomInt(22, 576)
        updateCor({ x, y })
    }

    const clicked = (e) => {
        if (e.target.nodeName === 'DIV') {
            updateMiss(prevmiss => prevmiss + 1)
        } else {
            updateScore(prevscore => prevscore + 1)
            changeBtnDirection()
            clearInterval(changePos.current)
            changePos.current = setInterval(() => { changeBtnDirection(true) }, 1000)
        }
    }

    //Component Mount
    useEffect(() => {
        changePos.current = setInterval(() => {
            changeBtnDirection()
        }, 1000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            console.log(time);
            if (time === 0) {
                console.log(miss, score)
                // btn.disabled = true
                clearInterval(changePos.current)
            } else {
                updateTime(prevtime => prevtime - 1)
            }

        }, 1000)
    }, [time])


    return (
        <>
        <div>
            <h1>00:{time < 10 ? `0${time}` : `${time}`} </h1>
            <div id="div" className="right" onClick={time === 0 ? null : clicked} >
                <button id="btn" style={style}><span id="dot"></span></button>
                <div id="flex">
                    <h2 className="score">Score: <abbr id="score" title="Your Score">{score}</abbr></h2>
                    <h2 className="accuracy">Accuracy: <abbr id="Miss" title="Your Accuracy">{!miss && !score ? "100%" : `${Math.round((score / (score + miss)) * 100)}%`}</abbr></h2>
                </div>
            </div>
        </div>
        </>
    )
}
