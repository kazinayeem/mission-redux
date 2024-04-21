import { combineReducers } from 'redux'
import counterReducer from './userReducer'


const rootReducer = combineReducers({
  counter : counterReducer
})

export default rootReducer

