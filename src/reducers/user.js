const user = (state, action) => {
    switch (action.type) {
        case 'CHANGE_USER':
            console.log("Action: ", action.type);
            return { name: action.name };
        default:
            return state
    }
}

export default user