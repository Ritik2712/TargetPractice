import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addMiss, Addscore, addScore, Reset } from '../Reducer/Action-Creator';


export default function Game({ toggel }) {
    const [time, updateTime] = useState(15)
    const [cor, updateCor] = useState({ x: getRandomInt(20, 876), y: getRandomInt(22, 576) })
    var style = { left: `${cor.x}px`, top: `${cor.y}px` }
    const dispatch = useDispatch()
    const { myscore, miss, score } = useSelector(state => state.scoreMiss)

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
            dispatch(addMiss())
        } else {
            dispatch(addScore())
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
        return () => {
            dispatch(Addscore())
            dispatch(Reset())
        }
    }, [])


    useEffect(() => {
        setTimeout(() => {
            if (time === 0) {
                console.log(miss, score)
                clearInterval(changePos.current)
                toggel()
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
                        <h2 className="score">Score: <abbr id="score" title="Your Score">{myscore}</abbr></h2>
                        <h2 className="accuracy">Accuracy: <abbr id="Miss" title="Your Accuracy">{!miss && !myscore ? "100%" : `${Math.round((myscore / (myscore + miss)) * 100)}%`}</abbr></h2>
                    </div>
                </div>
            </div>
        </>
    )
}
