import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  );
}

export default App;
