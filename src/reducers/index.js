import themeReducer from './theme'
import userReducer from './user'
import usersReducer from './users'
import authReducer from './auth'

export default ({ theme, user, users, auth }, action) => ({
    auth: authReducer(auth, action),
    theme: themeReducer(theme, action),
    user: userReducer(user, action),
    users: usersReducer(users, action),
});