const theme = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            console.log("Action: ", action.type);
            return { color: action.color };
        default:
            return state
    }
}

export default theme