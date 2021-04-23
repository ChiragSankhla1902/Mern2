import {combineReducers} from "redux";
import blogsr from "./ind";
import authreducer from "./authreducer";

const reducers = combineReducers({blogsr,authreducer});

export default reducers;