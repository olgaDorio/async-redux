import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Posts from './components/Posts/Posts.js';
import Post from './components/Post/Post.js';

import rootReducer from './reducers';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css'

const store = createStore(rootReducer, applyMiddleware(thunk));

const router = (
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path="/" component={Posts}/>
      <Route exact path="/posts" component={Posts}/>
      <Route path="/posts/:postId" component={Post}/>
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
