const reducer = (players = [], action) => {
    switch (action.type) {
        case "add":
            players = action.payload
            return players
        default:
            return players
    }
}

export default reducer