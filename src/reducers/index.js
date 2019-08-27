import themeReducer from './theme'
import userReducer from './user'
import usersReducer from './users'

export default ({ theme, user, users }, action) => ({
    theme: themeReducer(theme, action),
    user: userReducer(user, action),
    users: usersReducer(users, action),
});