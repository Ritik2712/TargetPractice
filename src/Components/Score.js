import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Score({ scores }) {
    // const [Name, setName] = useState("")
    var Name = ""
    const [show, setShow] = useState(true)
    const [Players, setPlayers] = useState([])
    var score = useSelector(state => state.scoreMiss)
    var { current: newScore } = useRef(0)
    useEffect(() => {
        setPlayers(scores.map((item, i) => {
            if (item.name === "  " && score.score === 0) {
                return
            }
            else if (score.score > item.score) {
                if (score.name) {
                    console.log("old name");
                    li = <tr key={score._id}>
                        <td>{i + 1}</td>
                        <td className='name'>{score.name}</td>
                        <td className='Score'>{score.score}</td>
                    </tr>
                } else {
                    console.log("new name");
                    var li = <tr key={i}> <td>{i + 1}</td><td className='name'><input placeholder='enter your name' onChange={(e) => { Name = e.target.value; }} /></td><td className='Score'>{score.score}</td>{show ? <button onClick={() => saveNewScore()} >save</button> : null}</tr>
                    newScore = score.score
                }
                score = item
                return li
            }
            else {
                console.log("no change");
                return <tr key={item._id}> <td>{i + 1}</td><td className='name'>{item.name}</td> <td className='Score'>{item.score}</td></tr>
            }
        }))

    }, [show])
    console.log(Name);
    const saveNewScore = () => {
        console.log(Name);
        const data = {
            score: newScore,
            name: Name,
            id: scores[9]._id
        }
        axios({
            method: "PUT",
            url: "https://limitless-castle-44403.herokuapp.com/score/post",
            data
        }).then(res => setShow(false))
            .catch(e => console.log(e))
    }
    return (
        <div>
            <table className='list'>
                {Players}
            </table>
        </div>
    )
}
