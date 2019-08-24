import themeReducer from './theme'
import userReducer from './user'

export default ({ theme, user }, action) => ({
    theme: themeReducer(theme, action),
    user: userReducer(user, action)
});