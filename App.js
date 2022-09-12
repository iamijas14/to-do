import 'react-native-gesture-handler';
import React from 'react';
import ToDoApp from './src/ToDoApp';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

const App = () => { 

  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
)};

export default App;
