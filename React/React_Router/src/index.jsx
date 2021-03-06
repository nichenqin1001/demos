import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactPromise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostDetail from './components/post_detail';

const createStoreWithMiddleware = applyMiddleware(ReactPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/post/new" component={PostNew} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
