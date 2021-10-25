import {applyMiddleware, combineReducers, createStore} from "redux";
import ContentNewsReducer from "./content-news-reducer";
import thunk from 'redux-thunk';
let reducer = combineReducers({
        ContentNews: ContentNewsReducer
    }
)

let store = createStore(reducer, applyMiddleware(thunk)) ;

export default store;