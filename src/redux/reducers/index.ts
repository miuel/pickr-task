import { combineReducers } from "redux";

import saveNumber from './saveNumber.reducer';
 

const appReducer = combineReducers({
    saveNumberRandom: saveNumber,
})

export default appReducer;