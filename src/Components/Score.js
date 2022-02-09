import axios from 'axios';
import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

export default function Score({ scores }) {
    const [name, setName] = useState("")
    const [show, setShow] = useState(true)
    var score = useSelector(state => state.scoreMiss)
    var newScore
    var Players = scores.map((item, i, arr) => {
        if (item.name === "  " && score.score === 0) {
            return
        }
        else if (score.score > item.score) {
            if (score.miss) {
                var li = <li key={i}><input placeholder='enter your name' autoFocus={true} onChange={(e) => setName(e.target.value)} />{score.score}{show ? <button onClick={() => saveNewScore()} >save</button> : null}</li>
                newScore = score.score
            } else {
                li = <li key={item._id}>{score.name} {score.score} </li>
            }
            score = item
            return li
        }
        else {
            return <li key={item._id}>{item.name} {item.score}</li>
        }
    })

    const saveNewScore = () => {
        const data = {
            score: newScore,
            name,
            id: scores[9]._id
        }
        axios({
            method: "PUT",
            url: "https://limitless-castle-44403.herokuapp.com/score/post",
            data
        }).then(res => setShow(false))
            .catch(e => console.log(e))
    }

    console.log(scores[9]._id);
    return (
        <div>
            <ol>
                {Players}
            </ol>
        </div>
    )
}
