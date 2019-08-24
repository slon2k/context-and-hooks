const user = (state, action) => {
    switch (action.type) {
        case 'CHANGE_USER':
            console.log('action: CHANGE_USER')
            return {...state, name: action.name}
        default:
            console.log('action: default')
            return state
    }
}

export default user