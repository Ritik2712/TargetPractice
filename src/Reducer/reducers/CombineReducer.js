import { combineReducers } from "redux";
import scoreMissReducer from "./scoreReducer";
import palyerReducer from './palyerReducer';
;


const reducers = combineReducers({
    scoreMiss: scoreMissReducer,
    players: palyerReducer
})

export default reducers

