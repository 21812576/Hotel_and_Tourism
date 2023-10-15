import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { packageDetailReducer, packageListReducer } from "./Reducers/PackageReducers";

const reducer = combineReducers({
    packageList : packageListReducer,
    packageDetail : packageDetailReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
