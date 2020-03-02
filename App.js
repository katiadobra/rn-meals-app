import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './store/reducers/products';

import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
