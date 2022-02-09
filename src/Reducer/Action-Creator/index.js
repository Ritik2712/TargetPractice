import axios from "axios"

export const addScore = () => {
    return (dispatch) => {
        dispatch({
            type: "score"
        })
    }
}

export const addMiss = () => {
    return (dispatch) => {
        dispatch({
            type: "miss"
        })
    }
}

export const Reset = () => {
    return (dispatch) => {
        dispatch({
            type: "reset"
        })
    }
}

export const addPlayer = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: 'https://limitless-castle-44403.herokuapp.com/score'
        }).then((res) => {
            dispatch({
                type: "add",
                payload: res.data
            })
        })
            .catch(e => console.log(e))
    }
}