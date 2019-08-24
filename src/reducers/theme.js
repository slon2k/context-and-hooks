const theme = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            console.log('action: CHANGE_THEME')
            return {...state, color: action.color}
        default:
            console.log('action: default')
            return state
    }
}

export default theme