import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import FootballMatchList from './components/FootballMatchList';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <FootballMatchList />
      </div>
    </Provider>
  )
}

export default App
