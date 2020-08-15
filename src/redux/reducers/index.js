import counterReducer from  './counter';
import loggedReducer from './isLogged';
import movieReducer from './movie';
import menuReducer from './menuReducer';
import {combineReducers} from 'redux';
import messageReducer from './messageReducer';
import notificationReducer from './notificationReducer';
import postReducer from './postReducer';
import usersReducer from './usersReducer';
import jobsReducer from './jobsReducer';
import myInfoReducer from './myInfoReducer';
import companiesReducer from './companiesReducer';
import allUsersReducer from './allUsersReducer';

const allReducer = combineReducers({
    counter: counterReducer,
    islogged : loggedReducer,
    movie: movieReducer,
    menu: menuReducer,
    messages : messageReducer,
    notifications : notificationReducer,
    posts : postReducer,
    users : usersReducer,
    allUsers: allUsersReducer,
    jobs : jobsReducer,
    myInfo : myInfoReducer,
    companies : companiesReducer
})

export default allReducer; 