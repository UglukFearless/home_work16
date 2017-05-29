import React from 'react';
import ReactDOM from 'react-dom';

import CommentApp from './containers/comments-app';
import { createStore } from 'redux';
import comments from './redusers';

let initialState;

const storageState = JSON.parse(window.localStorage.getItem('save_state_hw16'));

if (!storageState) {
  //Определим исходное состояние приложения
  initialState = {
    comments: [],
    nextCommentId: 0
  };
} else {
  initialState = storageState;
}


const store = createStore( comments, initialState );

ReactDOM.render(
  <CommentApp  store={store} />,
  document.querySelector('#app')
)
