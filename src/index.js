import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./i18n";
import store from "./redux/redux-store";

export let rerenderEntireTree = (state) => {
ReactDOM.render(
    <React.StrictMode>
        <App dispatch={store.dispatch.bind(store)} store={store.getState()}/>
    </React.StrictMode>,
    document.getElementById('root')
)};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)

