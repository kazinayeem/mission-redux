import { createStore } from 'redux'
import appReducer from '../reducer/reducer'

export const store = createStore(appReducer)


