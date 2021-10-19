import {combineReducers, createStore} from "redux";
import ContentNewsReducer from "./content-news-reducer";

let reducer = combineReducers({
        ContentNews: ContentNewsReducer
    }
)

let store = createStore(reducer);

export default store;