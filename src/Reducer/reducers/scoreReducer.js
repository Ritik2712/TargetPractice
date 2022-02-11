var initialState = {
    score: 0,
    miss: 0,
    myscore: 0
}
const reducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case "score":
            console.log("myscore added");
            state.myscore++
            return state
        case "miss":
            console.log("miss added");
            state.miss++
            return state
        case "reset":
            state.myscore = 0
            state.miss = 0
            return state
        case "myscore":
            state.score = state.myscore
            return state
        default:
            return state
    }
}

export default reducer