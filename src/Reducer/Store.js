import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers/CombineReducer';

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default store

