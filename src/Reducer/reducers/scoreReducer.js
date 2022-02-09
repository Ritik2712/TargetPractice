var initialState = {
    score: 0,
    miss: 0
}
const reducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case "score":
            state.score++
            return state
        case "miss":
            state.miss++
            return state
        case "reset":
            state.score = 0
            state.miss = 0
        default:
            return state
    }
}

export default reducer